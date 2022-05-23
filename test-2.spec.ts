import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://www.amazon.in/
  await page.goto('https://www.amazon.in/');

  // Click [aria-label="Search"]
  await page.locator('[aria-label="Search"]').click();

  // Fill [aria-label="Search"]
  await page.locator('[aria-label="Search"]').fill('iphone');

  // Click input:has-text("Go")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.amazon.in/s?k=iphone&crid=1YSRBDV3HVH4G&sprefix=iphone%2Caps%2C290&ref=nb_sb_noss_2' }*/),
    page.locator('input:has-text("Go")').click()
  ]);

});