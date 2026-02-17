"""
SPA 크롤링 스크립트 - Playwright (headless Chromium)
WebFetch로 크롤링 불가했던 서비스의 약관/개인정보처리방침을 수집합니다.
"""
import asyncio
import json
import sys
from playwright.async_api import async_playwright


async def fetch_page(url: str, wait_selector: str = "body", timeout: int = 30000) -> str:
    """headless Chromium으로 SPA 페이지를 렌더링 후 텍스트를 추출합니다."""
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            locale="ko-KR",
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        )
        page = await context.new_page()
        try:
            await page.goto(url, wait_until="networkidle", timeout=timeout)
            await page.wait_for_selector(wait_selector, timeout=10000)
            # 추가 대기 (동적 렌더링 완료)
            await page.wait_for_timeout(2000)
            content = await page.content()
            # 본문 텍스트 추출
            text = await page.evaluate("""() => {
                // 불필요한 요소 제거
                document.querySelectorAll('script, style, nav, header, footer, noscript').forEach(el => el.remove());
                return document.body.innerText;
            }""")
            return text
        except Exception as e:
            return f"ERROR: {str(e)}"
        finally:
            await browser.close()


async def main():
    if len(sys.argv) < 2:
        print("Usage: python3 crawl_spa.py <url> [css_selector]")
        sys.exit(1)

    url = sys.argv[1]
    selector = sys.argv[2] if len(sys.argv) > 2 else "body"

    print(f"Crawling: {url}")
    print(f"Selector: {selector}")
    print("---")

    text = await fetch_page(url, selector)
    print(text)


if __name__ == "__main__":
    asyncio.run(main())
