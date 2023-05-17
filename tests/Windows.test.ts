
import {expect, test} from "@playwright/test";

test("Interact with multiple tabs", async({ page })=>{
  await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
   //console.log(page.url());
  // for single window
 /* const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("'Follow On Twitter'")
  ]);
 */
  const [multiPage] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth")
  ])
  //waits untill all pages loaded
  await multiPage.waitForLoadState();
  const pages = multiPage.context().pages();// all opened pages we got here

  console.log('No of tabs' +pages.length);
  pages.forEach(tab=>{
    console.log(tab.url());
  })

  // for multiple pages
  let facebookpage: Page;
  for(let index = 0; index< pages.length; index++ ){
    const url = pages[index].url()
    if(url == "https://www.facebook.com/lambdatest/"){
      facebookpage = pages[index];
    }
  }

  //await page[1].fill("", "dhana")// to fill each page


})