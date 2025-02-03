import {test,expect,chromium} from '@playwright/test'

test("Handle multiple pages",async()=>{
      const browser = await chromium.launch();
      const context = await browser.newContext();
      const page1 = await context.newPage();
      await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
      await expect(page1).toHaveTitle("OrangeHRM");
      const pagePromise = context.waitForEvent('page');
      await page1.locator("//a[text()='OrangeHRM, Inc']").click();
      const newPage = await pagePromise;
      const email_field = await newPage.locator("input#Form_submitForm_EmailHomePage");
      await expect(email_field).toBeVisible();
      await page1.waitForTimeout(3000);
})