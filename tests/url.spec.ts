import {test, expect} from "@playwright/test";

test("Verify Url", async({page})=> {

    await page.goto("https://automationexercise.com/");

    let url:string = await page.url();
    console.log("URL is : ", url);

    await expect(page).toHaveURL(/automationexercise/);
    


})