const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();
  await page.goto('https://ksn2.faa.gov/_login/default.aspx?ReturnUrl=%2fajw%2fHome%2fwsa%2ftechsvcs%2f_layouts%2f15%2fAuthenticate.aspx%3fSource%3d%252Fajw%252FHome%252Fwsa%252Ftechsvcs%252FSitePages%252FWSA%2520EOSH%2520Services%2520Ops%2520Group%252Easpx&Source=%2Fajw%2FHome%2Fwsa%2Ftechsvcs%2FSitePages%2FWSA%20EOSH%20Services%20Ops%20Group%2Easpx');
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('dominic.e.sisneros@faa.gov');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();