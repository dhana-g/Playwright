import { test } from "@playwright/test";

test("Calender demo using fill function", async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    let date = "04-12-1994"
    
    await page.fill("id=birthday", date);
    await page.waitForTimeout(3000)


})