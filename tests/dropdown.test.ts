
import {expect, test} from "@playwright/test";

test("handling dropdown", async({ page }) => {

await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
await page.selectOption("#select-demo", {
  //label: "Tuesday"
  //value: "Friday"
  index: 5
})

await page.waitForTimeout(3000);
await page.selectOption("#multi-select",[

    {
        label: "Florida"
    },{
        value: "Pennsylvania"
    },{
        index: 4
    }
])

})

/*test.only("Bootstrap dropdown", async({ page }) => {

 await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
  await page.click("#country+span");
 await page.locator("ul#select2-country-results")

 .locator("Li", {
    hasText: "India"

 }).click()
 await page.waitForTimeout(3000)

})*/
//another way with function
test.only("Bootstrap", async({ page}) =>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");

    async function selectCountry(countryName) {

        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
        .locator("Li", {
            hasText: countryName
        }).click();
        
    }

})