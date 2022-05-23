import { expect, test } from "@playwright/test";


test.describe("SmokeTest", async ()=>{


    // test.beforeAll(async function({page){

    //     await page.goto("https://www.amazon.in/")

    // })

    test("TC_1001: open amazon app and verify title", async ({page})=>{

        await page.goto("https://www.amazon.in/")
        const title = await page.title()
        expect(title).toContain("Shop Online for Mobiles, Books, Watches")
    
    
    })
    
    test("TC_1002: open amazon app and search iphone", async ({page})=>{
    
        await page.goto("https://www.amazon.in/")
        
    
        await page.fill("input#twotabsearchtextbox", "iphone")
    
        await page.click("input#nav-search-submit-button")
        
        await page.waitForNavigation()
        //validation after search items
        const title = await page.title()
        expect(title).toContain("iphone")
        //expect(title).toContain("Shop Online for Mobiles, Books, Watches")
    
    
    })
    




})



