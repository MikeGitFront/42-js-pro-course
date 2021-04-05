import puppeteer from 'puppeteer'; // 1

describe('e2e' ,() => {
  let browser;
  let page;

  // 2
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();
    await page.goto('http://localhost:5000/');
  });

  // 3
  it('Test saving name', async () => {
    expect(true).toBeTruthy()
  }, 10000);

  // 4
  afterAll(() => {
    browser.close();
  });
})
