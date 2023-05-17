import { test, expect } from '@playwright/test';


test.describe("Testcase of Capgemini",async()=>{


    test("Testcase of Wrapper Card Text Pic Editor",async({page})=>{
    
   await page.goto("https://www.capgemini.com/in-en/")
   await page.locator("#macs_cookies_accept_all").click()
   await page.waitForTimeout(3000)

    try{
        const WrapperCardTextPicImage = page.locator(".wp-block-cg-blocks-wrapper-card-text-pic div picture img")

    if(await WrapperCardTextPicImage.isVisible()){
			console.log("User is able to displayed Wrapper Card Text Pic Editor image");

    }

    }catch (e){
        console.log("User is not able to see image");

    }

    try{
        const WrapperCardTextPicTitle = page.locator(".titlewithLink")
        if(await WrapperCardTextPicTitle.isVisible()){
            await WrapperCardTextPicTitle.click()
           	console.log("User is able to click on Wrapper Card Text Pic Title");
			await page.waitForTimeout(5000)
            await page.locator(".mobile-home").click()
            
        }
    }catch (e){
        console.log("User is not able to click text");
    }
    try{
        const WCTPReadMoreButton = page.locator(".box-bottom a")
        if(await WCTPReadMoreButton.isVisible()){
            await page.locator(".box-bottom a").click()
           	console.log("User is able to click on Read More button");
			//await page.waitForTimeout(5000)
            await page.locator(".mobile-home").click()
    }
}catch (e){
    console.log("User is not able to click on Read More Button");
}
    
   })
})