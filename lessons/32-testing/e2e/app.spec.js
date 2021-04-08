import puppeteer from 'puppeteer'; // 1

describe('e2e', () => {
  let browser;
  let page;

  // 2
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 80,
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3030/');
  });

  // 3
  it('Test saving name', async () => {
    await page.click('.input')
    await page.keyboard.type('Alex')
    await page.click('.button')
    const data = await page.evaluate(() => localStorage.getItem('name'))
    expect(data).toBe('Alex')
  }, 10000);

  // 4
  afterAll(() => {
    browser.close();
  });
})
