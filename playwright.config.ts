import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {


    use: {

        viewport: null,
        headless: false,
        channel: "chrome",
        screenshot:"on",
        video: "on",
        baseURL: "https://reqres.in/api/users",
        


        launchOptions: {
            args: ["--start-maximized"]
        }

    },

    //testMatch: ["apitest/sampleREST_API.test.ts"],
    //testMatch: ["locatorAPI/locatorIndetail.test.ts"],
    //testMatch: ["visual-comparsion/visual.test.ts"],
	testMatch: ["authExample/authTest.ts"],
    retries: 0,
    reporter: [ ["dot"], ["json", {outputFile: "test-result.json"}]]


}

export default config;