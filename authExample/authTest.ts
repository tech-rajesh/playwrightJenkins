

import {test, expect } from "@playwright/test"
import { logWarnings } from "protractor/built/driverProviders";



test.describe("Network- playwright, auth ", ()=>{


    test("HTTP auth", async function ({browser}) {
        

            const context =  await browser.newContext({

                httpCredentials:{

                    "username": "admin",
                    "password": "admin"

                }




            })


            const page = await context.newPage();

            await page.goto("https://the-internet.herokuapp.com/basic_auth")

            await page.waitForNavigation()
            const header = await page.$("h3")

            
            if(header){

                    console.log(await header.textContent());
                    expect(await header.textContent()).toBe("Basic Auth")
                    


            }


    })




})