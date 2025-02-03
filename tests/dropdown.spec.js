import {test,expect} from '@playwright/test'
test.describe.only('Group 1',()=>{
    test('Normal Dropdown assertions',async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        await page.locator("//select[@id='country']").selectOption('India');
        // await page.selectOption('#country','India')
        const dropdown_options = await page.locator("//select[@id='country']/option").allTextContents();
        // console.log(dropdown_options)
        let status = false
        for(const i of dropdown_options){
            if(i.includes('India')){
                status = true
                break
            }
        }
        expect(status).toBeTruthy();
        // await page.waitForTimeout('5000');
    })
    test("handling multiselect down",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
        // await page.selectOption("//select[@id='colors']",['Blue','Green']);
    const colors_options = await page.locator("//select[@id='colors']/option");
    await expect(colors_options).toHaveCount(7)
    const color_options_multi = await page.$$("//select[@id='colors']/option");
    await expect(color_options_multi.length).toBe(7)
    })
})
test.describe.skip('Group 2',()=>{
    test('handling bootstrap dropdown',async({page})=>{
        await page.goto("https://www.jquery-az.com/");
        await page.hover("//a[text()='Programming']");
        await page.locator("//a[text()='Python']").click();
        const title = await page.locator("//h1[@class='page-title']")
        await expect(title).toBeVisible();
    })

    test("Auto suggest dropdown",async({page})=>{
        await page.goto("https://www.redbus.in/");
        await page.locator("#src").fill("Coimbatore");
        await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']/div/text[1]");
        const options = await page.$$("//li[@class='sc-iwsKbI jTMXri']/div/text[1]");
        for(let i of options){
            const value = await i.textContent();
            if(value.includes('Coimbatore')){
                await i.click();
                break
            }
        }
    })
})





