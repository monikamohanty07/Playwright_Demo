import {test, expect} from "@playwright/test"

test("Verify page title", async({page})=>{

    await page.goto("https://automationexercise.com/");
    let title:string = await page.title();
    console.log("Title is : ", title);

    await expect(page).toHaveTitle("Automation Exercise")

})