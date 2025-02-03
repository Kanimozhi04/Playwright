import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async({browser})=>{
   page = await browser.newPage();
   await page.goto("https://demoblaze.com/index.html");
   await page.click('a#login2');
   await page.locator('#loginusername').click();
   await page.locator('#loginusername').fill('pavanol');
   await page.locator('#loginpassword').click();
   await page.locator('#loginpassword').fill('test@123');
   await page.getByRole('button', { name: 'Log in' }).click();
   await page.waitForTimeout(5000);
})

test.afterEach(async()=>{
      await page.click('//a[text()="Log out"]');
      await page.waitForTimeout(5000);
})

test('Home page test',async()=>{
      await page.getByRole('link', { name: 'Phones' }).click();
      await page.getByRole('link', { name: 'Laptops' }).click();
      await page.getByRole('link', { name: 'Monitors' }).click();
})
