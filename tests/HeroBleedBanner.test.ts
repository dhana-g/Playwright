import { test, expect } from '@playwright/test';


test.describe("Testcase of Capgemini",async()=>{


    test("Testcase of Hero Bleed Banner",async({page})=>{
    
   await page.goto("https://www.capgemini.com")
   await page.locator("#macs_cookies_accept_all").click()
   await page.waitForTimeout(3000)
   
  
try {
   const HeroBleedBannerVideo = page.locator(".wp-block-cg-blocks-hero-bleed-banner div video")
     if(await HeroBleedBannerVideo.isVisible()){
        console.log("User is able to see video on hero bleed blanner");
        try
        {
            console.log("User is able to see Play / Pause button");
            await page.waitForTimeout(3000)
            await page.locator("#hero-bleed-video-play-pause-button").click()
            console.log("User is able click on Play / Pause button");
        }
        catch (e){
            console.log("User is not able to video is not Displayed");
        }
    }

}
catch(e){
    console.log("User is not able to video is not Displayed");

    }

    try{
        const HeroBleedBannerImage = page.locator(".wp-block-cg-blocks-hero-bleed-banner div picture img")

    if(await HeroBleedBannerImage.isVisible()){
			console.log("User is able to displayed hero bleed blanner image");

    }

    }catch (e){
        console.log("User is not able to see image");

    }

    try{
        const HeroBleedBannerTitle = page.locator(".wp-block-cg-blocks-hero-bleed-banner h1")
        if(await HeroBleedBannerTitle.isVisible()){
            await page.locator(".wp-block-cg-blocks-hero-bleed-banner h1").click()
           	console.log("User is able to click on hero bleed blanner Title");
			//await page.waitForTimeout(5000)
            await page.locator(".mobile-home").click()
            
        }

    }catch(e){
		console.log("User is not able to see hero bleed blanner Title");

    }
     
  
    })
})

test("Testcase of Latest Insights Block",async({page})=>{

    await page.goto("https://www.capgemini.com/in-en/")
   await page.locator("#macs_cookies_accept_all").click()
   await page.waitForTimeout(3000)
   try{
    const HeadingOfLatestInsights = page.locator(".latest-insights")
    if(await HeadingOfLatestInsights.isVisible()){
        console.log("User is able to see HeadingOfLatestInsights")

    }
   }catch (e){
    console.log("User is not able to HeadingOfLatestInsights");
}


})