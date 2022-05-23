import { expect, test } from "@playwright/test";

test("open amazon app and verify title", async ({page})=>{

    await page.goto("https://www.amazon.in/")
    const title = await page.title()
    expect(title).toContain("Shop Online for Mobiles, Books, Watches")


})

test("open amazon app and search iphone", async ({page})=>{

    await page.goto("https://www.amazon.in/")
    

    await page.fill("input#twotabsearchtextbox", "iphone")

    await page.click("input#nav-search-submit-button")
    
    await page.waitForNavigation()
    //validation after search items
    const title = await page.title()
    expect(title).toContain("Shop Online for Mobiles, Books, Watches")


})
