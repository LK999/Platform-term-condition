/**
 * SPA 크롤링 스크립트 - Playwright (headless Chromium)
 * Usage: node crawl_spa.js <url> [output_file]
 */
const { chromium } = require('playwright');

async function fetchPage(url, timeout = 45000) {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const context = await browser.newContext({
    locale: 'ko-KR',
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  try {
    const response = await page.goto(url, { waitUntil: 'networkidle', timeout });
    console.error(`Status: ${response?.status()}`);
    console.error(`URL: ${page.url()}`);

    // 동적 렌더링 대기
    await page.waitForTimeout(3000);

    // HTML도 저장 (디버깅용)
    const html = await page.content();
    console.error(`HTML length: ${html.length}`);

    const text = await page.evaluate(() => {
      const body = document.body || document.documentElement;
      if (!body) return 'NO_BODY';
      // 불필요한 요소 제거
      body.querySelectorAll('script, style, noscript, iframe').forEach(el => el.remove());
      return body.innerText || body.textContent || 'EMPTY';
    });

    return text;
  } catch (e) {
    return `ERROR: ${e.message}`;
  } finally {
    await browser.close();
  }
}

(async () => {
  const url = process.argv[2];
  const outputFile = process.argv[3];

  if (!url) {
    console.error('Usage: node crawl_spa.js <url> [output_file]');
    process.exit(1);
  }

  console.error(`Crawling: ${url}`);
  const text = await fetchPage(url);

  if (outputFile) {
    require('fs').writeFileSync(outputFile, text, 'utf-8');
    console.error(`Saved to: ${outputFile}`);
  } else {
    console.log(text);
  }
})();
