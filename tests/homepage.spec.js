import {test,expect} from '@playwright/test'

test("Home page test@sanity",async({page})=>{
    await page.goto("https://playwright.dev/");
    await page.title();
    await expect(page).toHaveURL('https://playwright.dev/');
})

test('Locators@reg',async({page})=>{
    await page.goto('https://demoblaze.com/');
    await page.locator('//a[normalize-space(text())="Home"]').click();
    await page.click('a#login2');
    await page.fill('input#loginusername','pavanol');
    await page.fill('input[id="loginpassword"]','test@123');
    await page.click('//button[text()="Log in"]')
    const logout = await page.locator('a#logout2')
    await expect(logout).toBeVisible()
})

test('Locate Multiple elements@sanity',async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
    const products = await page.$$("//h4[@class='card-title']/child::a")
    for(const product of products){
        const prodName = await product.textContent();
        console.log(prodName)
    }

})

test('inbuilt locators@reg@sanity',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator('//button[@type="submit"]').click();
    await page.locator("//span[text()='PIM']").click();
    const profile = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    // console.log(profile)
    await expect(page.getByText(profile)).toBeVisible()

})