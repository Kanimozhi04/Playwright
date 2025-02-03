import {test,expect} from '@playwright/test'
test('simple alert',async({page})=>{
    page.on('dialog',async dialog =>{
        console.log("Dialog Message:", dialog.message());
        expect(dialog.type()).toContain('alert');
        await dialog.accept();
        expect(dialog.message()).toContain("I am an alert box!");
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[@id='alertBtn']").click();
    await page.waitForTimeout(5000);
})
test('Confirmation alert',async({page})=>{
    page.on('dialog',async dialog =>{
        await dialog.accept();
        expect(dialog.message()).toContain("Press a button!");
    })
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("//button[@id='confirmBtn']");
    await page.waitForTimeout(5000);
})