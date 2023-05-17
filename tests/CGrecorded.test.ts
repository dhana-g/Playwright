
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.capgemini.com/');
  await page.getByRole('link', { name: 'Insights menu' }).click();
  await page.getByRole('link', { name: 'Our research library' }).click();
  await page.getByRole('link', { name: 'Allow all cookies' }).click();
  await page.getByRole('link', { name: 'Read more about De-risk legacy to redefine engagement' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#quoteWrapper').getByRole('link', { name: 'Linkedin' }).click();
  const page1 = await page1Promise;
  const page2Promise = page.waitForEvent('popup');
  await page.locator('#quoteWrapper').getByRole('link', { name: 'Twitter' }).click();
  const page2 = await page2Promise;
  const page3Promise = page.waitForEvent('popup');
  await page.locator('#quoteWrapper').getByRole('link', { name: 'Facebook' }).click();
  const page3 = await page3Promise;
});