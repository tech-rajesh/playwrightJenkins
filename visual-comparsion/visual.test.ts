import { expect, test } from "@playwright/test";

test("Visual comparsion - Googletest", async ({ page }) => {
    await page.goto("https://www.google.com/");

    expect(await page.screenshot({
        fullPage: true
    })).toMatchSnapshot("google.png")

})


test.only("Visual comparsion - Amazon", async ({ page }) => {
    await page.goto("https://www.amazon.com/");

    expect(await page.screenshot({
        fullPage: true
    })).toMatchSnapshot("amazon.png")

})

test('example test', async ({ page }) => {
    await page.goto('https://lifecharger.org/');
    expect(await page.screenshot()).toMatchSnapshot('lifecharger.png');
});