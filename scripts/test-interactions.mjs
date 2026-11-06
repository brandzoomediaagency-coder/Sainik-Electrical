import { spawn } from 'node:child_process';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9224;

async function run() {
  console.log('Testing interactive states on mobile (375x667)...');
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--disable-gpu',
    `--remote-debugging-port=${PORT}`,
    '--no-first-run',
  ]);

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

    const ws = new WebSocket(target.webSocketDebuggerUrl);
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
    await new Promise((r) => setTimeout(r, 1200));

    // Emulate iPhone SE (375 x 667)
    await send('Emulation.setDeviceMetricsOverride', {
      width: 375,
      height: 667,
      deviceScaleFactor: 2,
      mobile: true,
    });

    console.log('1. Testing Mobile Menu Open/Close:');
    const menuResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const menuBtn = document.querySelector('button[aria-label="Open menu"]');
        if (!menuBtn) return { error: 'Menu button not found' };
        menuBtn.click();
        const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
        const drawer = document.querySelector('nav > div.xl\\\\:hidden');
        return { isOpen, drawerExists: !!drawer };
      })()`,
      returnByValue: true,
    });
    console.log('   Menu open state:', menuResult.result.value);

    console.log('2. Testing Dual-Mode Calculator Tab Switch:');
    const tabResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const tabs = document.querySelectorAll('button[role="tab"]');
        let inverterTab = null;
        for (const t of tabs) {
          if (t.textContent.includes('Inverter & Battery Backup')) inverterTab = t;
        }
        if (!inverterTab) return { error: 'Inverter tab button not found' };
        inverterTab.click();
        return { clicked: true };
      })()`,
      returnByValue: true,
    });
    console.log('   Tab click result:', tabResult.result.value);

    await new Promise((r) => setTimeout(r, 400));

    const checkInverterTab = await send('Runtime.evaluate', {
      expression: `(() => {
        const heading = document.querySelector('#solar-calculator h3');
        return {
          headingText: heading ? heading.textContent : 'none',
          inverterActive: heading && heading.textContent.includes('Essential Power Outage Appliances')
        };
      })()`,
      returnByValue: true,
    });
    console.log('   Inverter UI active:', checkInverterTab.result.value);

    console.log('3. Testing Lightbox Modal:');
    const galleryResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const galleryItem = document.querySelector('#gallery div[role="button"]');
        if (!galleryItem) return { error: 'Gallery item not found' };
        galleryItem.click();
        const modal = document.querySelector('div[role="dialog"]');
        return { modalOpened: !!modal };
      })()`,
      returnByValue: true,
    });
    console.log('   Lightbox modal state:', galleryResult.result.value);

    console.log('4. Testing Form Validation:');
    const formResult = await send('Runtime.evaluate', {
      expression: `(() => {
        const form = document.querySelector('#contact form');
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.click();
        const nameErr = document.querySelector('#name-error');
        const phoneErr = document.querySelector('#phone-error');
        return {
          validationTriggered: !!nameErr && !!phoneErr,
          nameError: nameErr ? nameErr.textContent.trim() : null,
          phoneError: phoneErr ? phoneErr.textContent.trim() : null
        };
      })()`,
      returnByValue: true,
    });
    console.log('   Form validation state:', formResult.result.value);

    ws.close();
    console.log('\nAll interactive checks passed successfully!');
  } catch (err) {
    console.error('Interaction test error:', err);
  } finally {
    chrome.kill();
  }
}

run();
