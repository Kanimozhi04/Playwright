import {test,expect} from '@playwright/test'
// test("assertions",async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/register/");
//     // hard assertions
//     await expect(page).toHaveTitle("nopCommerce demo store. Register");
//     const img = await page.getByAltText("nopCommerce demo store");
//     await expect(img).toBeVisible();
//     //soft assertions
//     await expect.soft(page).toHaveTitle("nopCommerce demo store. Register ");
//     const img1 = await page.getByAltText("nopCommerce demo store");
//     await expect.soft(img1).toBeVisible();
// })
// test("To handle input box",async({page})=>{
//     await page.goto("https://demo.nopcommerce.com/register/");
//     const fname = await page.getByLabel("First name:");
//     await expect(fname).toBeEditable();
//     await expect(page.locator("//input[@id='LastName']")).toBeEmpty();
//     await expect(page.locator("//input[@id='Email']")).toBeEditable();
// })
test("To handle radio button",async({page})=>{
    // test.setTimeout(5000);
    await page.goto("https://demo.nopcommerce.com/register/");
    // console.log("page loaded successfully");
    await page.locator("//input[@id='gender-male']").check();
    await expect(page.locator("//input[@id='gender-male']")).toBeChecked();
    const is_checked  = await page.locator("//input[@id='gender-male']").isChecked();
    console.log(is_checked );
    expect(is_checked).toBeTruthy();
    expect(await page.locator("//input[@id='gender-female']").isChecked()).toBeFalsy();
    await page.waitForTimeout(3000);

})

test('To handle check box',async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register/");
    await page.locator("//input[@id='Newsletter']").uncheck();
})

test("To handle dropdown",async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register/");
    await page.locator("//select[@name='DateOfBirthMonth']").selectOption('March');
    await page.locator("//select[@name='DateOfBirthDay']").selectOption('28');
    await page.locator("//select[@name='DateOfBirthYear']").selectOption({value:'2001'});
    await page.waitForTimeout(5000);
})

test("dropdown assertions",async({page})=>{
   await page.goto("https://demo.nopcommerce.com/register/");
   const year_options_count = await page.locator("//select[@name='DateOfBirthYear']/option").allTextContents()
   console.log(year_options_count);
//    await expect(year_options_count).toHaveCount(112);
   const day_count = await page.$$("//select[@name='DateOfBirthDay']/option");
   console.log(day_count.length);
   const day_locator_count = await page.locator("//select[@name='DateOfBirthDay']/option").count();
   console.log(day_locator_count);
   const conent_dropdown = await page.locator("//select[@name='DateOfBirthMonth']/option").allTextContents();
   await expect(conent_dropdown.includes('January')).toBeTruthy();
// presence of dropdown value
// let status = false;
//   for(const yearOptions of year_options_count)
//   {
//     if(yearOptions.includes('1911'))
//     {
//         status=true
//         break
//     }
//   }
//   expect(status).toBeFalsy();
for(const yearOptions of year_options_count)
{
    if(year_options_count.includes('2006')){
        await page.selectOption("//select[@name='DateOfBirthYear']/option",year_options_count);
        break;
    }
}
page.waitForTimeout(5000);
})
