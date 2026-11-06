import { spawn } from 'node:child_process';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9223;

async function run() {
  console.log('Starting headless chrome for layout audit...');
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    '--no-first-run',
    '--no-default-browser-check',
  ]);

  // Wait for Chrome to listen
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) break;
    } catch {
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  try {
    const listRes = await fetch(`http://127.0.0.1:${PORT}/json/list`);
    const pages = await listRes.json();
    let target = pages.find((p) => p.type === 'page');

    if (!target) {
      const newTabRes = await fetch(`http://127.0.0.1:${PORT}/json/new`);
      target = await newTabRes.json();
    }

    const wsUrl = target.webSocketDebuggerUrl;
    console.log('Connected to CDP target:', target.id);

    const ws = new WebSocket(wsUrl);
    await new Promise((resolve) => (ws.onopen = resolve));

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve) => {
        const msgId = id++;
        const handler = (event) => {
          const data = JSON.parse(event.data);
          if (data.id === msgId) {
            ws.removeEventListener('message', handler);
            resolve(data.result);
          }
        };
        ws.addEventListener('message', handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await send('Page.enable');
    await send('DOM.enable');
    await send('Page.navigate', { url: 'http://localhost:3000' });

    // Wait for page load
    await new Promise((r) => setTimeout(r, 1200));

    const viewports = [
      { name: 'Mobile 320px (iPhone 5/SE old)', width: 320, height: 600 },
      { name: 'Mobile 360px (Standard Android)', width: 360, height: 780 },
      { name: 'Mobile 375px (iPhone SE)', width: 375, height: 667 },
      { name: 'Mobile 390px (iPhone 14/15)', width: 390, height: 844 },
      { name: 'Tablet 768px (iPad)', width: 768, height: 1024 },
      { name: 'Desktop 1024px (Small laptop)', width: 1024, height: 768 },
      { name: 'Desktop 1440px (MacBook Pro/Desktop)', width: 1440, height: 900 },
    ];

    console.log('\n=== AUDITING VIEWPORT OVERFLOWS & LAYOUT FIT ===');

    for (const vp of viewports) {
      await send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 2,
        mobile: vp.width < 1000,
      });

      await new Promise((r) => setTimeout(r, 600));

      const evalRes = await send('Runtime.evaluate', {
        expression: `(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const winWidth = window.innerWidth;
          const docScrollWidth = docEl.scrollWidth;
          const bodyScrollWidth = body.scrollWidth;
          const hasHScroll = docScrollWidth > winWidth || bodyScrollWidth > winWidth;

          // Find specific elements overflowing the window width
          const overflowing = [];
          const allEls = document.querySelectorAll('*');
          for (const el of allEls) {
            const rect = el.getBoundingClientRect();
            // allow 1px rounding margin
            if (rect.right > winWidth + 1.5 && rect.width > 0 && rect.height > 0) {
              const tag = el.tagName.toLowerCase();
              const id = el.id ? '#' + el.id : '';
              const cls = el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').slice(0, 2).join('.') : '';
              overflowing.push({
                selector: tag + id + cls,
                right: Math.round(rect.right),
                width: Math.round(rect.width),
                overflowAmount: Math.round(rect.right - winWidth)
              });
            }
          }

          return {
            winWidth,
            docScrollWidth,
            hasHScroll,
            overflowCount: overflowing.length,
            overflowing: overflowing.slice(0, 5)
          };
        })()`,
        returnByValue: true,
      });

      const res = evalRes.result.value;
      if (res.hasHScroll || res.overflowCount > 0) {
        console.log(`❌ [${vp.name}]: OVERFLOW DETECTED! Window=${res.winWidth}px, ScrollWidth=${res.docScrollWidth}px`);
        console.log('   Offending elements:', JSON.stringify(res.overflowing, null, 2));
      } else {
        console.log(`✅ [${vp.name}]: Clean fit! Zero horizontal scroll. (Width: ${res.winWidth}px)`);
      }
    }

    ws.close();
  } catch (err) {
    console.error('Audit error:', err);
  } finally {
    chrome.kill();
  }
}

run();
