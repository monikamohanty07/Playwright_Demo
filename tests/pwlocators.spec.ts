import {test, expect, Locator} from "@playwright/test"

test("Verify Playwright Locators", async({page})=> {

    await page.goto("https://automationexercise.com/");

    await page.getByRole('link', {name : 'Products'}).click();

    
    await expect(page).toHaveTitle("Automation Exercise - All Products");
    await page.getByAltText('ecommerce website products').hover();

    await page.getByRole('link', {name: 'Add to cart'}).click();
    let successmessage:Locator = page.getByText("Your product has been added to cart.");

    expect(successmessage).toBeVisible;

    await page.getByRole('button', {name: 'Continue Shopping'}).click();

    const logo:Locator = page.getByAltText("Website for automation practice");

    await expect(logo).toBeVisible();

    await logo.click();

    let title:string = await page.title();
    await expect(page).toHaveTitle("Automation Exercise");

    if(title === "Automation Exercise"){

        console.log("Homepage loads successfully");
    }

      
})

