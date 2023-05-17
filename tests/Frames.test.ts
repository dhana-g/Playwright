
import {expect,test} from "@playwright/test";

test("Intract with frames", async({page})=>{
 
    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
     console.log("No of Frames:"+allframes.length);

     const frame = page.frameLocator("#firstFr")
     await frame.locator("input[name='fname']").fill("dhana");
     await frame.locator("input[name='lname']").fill("guthula")


    /*  const myFrame = page.frame("firstFr")
     // if (myFrame != null){
      //  await myFrame.fill("","")
    // }
    await myFrame?.fill("input[name='fname']","dhana")
    await myFrame?.fill("input[name='lname']","lakshmi")

   expect(await myFrame?.locator("p.title.has-text-info").textContent()).toContain("You have entered")
    */ await page.waitForTimeout(3000);



})