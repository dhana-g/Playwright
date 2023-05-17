import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://www.capgemini.com")
  page.hover('nav#menu-top ul li:nth-child(6) > a')
  await page.click('nav#menu-top ul li:nth-child(6) > a[href*="join-us"]')


}