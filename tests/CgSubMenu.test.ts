import { Expect, test } from "@playwright/test";

test("", async ({page}) =>{
 await page.goto("https://www.capgemini.com/");
 await page.click("//a[contains(text(),'Allow all cookies')]");
 await page.click("(//img[@class='icon-size'])[2]");
 await page.hover("//a[contains(text(),'Tracking maternal health')]");
 await page.click("//a[contains(text(),'Tracking maternal health')]");
 await page.click("//a[contains(text(),'Read more')]")

 //await page.toHaveURL(/.*checkout/);
 await page.waitForTimeout(3000);

})