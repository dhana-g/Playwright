import { test, expect } from '@playwright/test';


test.describe.only("Testcase of Capgemini",async()=>{

test("Testcase of Latest Insights Block",async({page})=>{

    await page.goto("https://www.capgemini.com")
   await page.locator("#macs_cookies_accept_all").click()
   await page.waitForTimeout(5000)
   try{
    const HeadingOfLatestInsights = page.locator(".latest-insights")
    const LatestInsights = HeadingOfLatestInsights.locator(".insight-title")
    if(await LatestInsights.isVisible()){
        console.log("User is able to see heading of the Latest Insights block",await LatestInsights.textContent())

    }
   }catch (e){
    console.log("User is not able to see heading of the Latest Insights block");
}
try{
    const FirstTitleOfLatestInsight = page.locator("(//h4[@class='card-title'])[1]")//(//h4[@class='card-title'])[1]//section[contains(@class,'latest-insights')]["+(i+1)+"]//div[contains(@class,'layout')]//h4
    if(await FirstTitleOfLatestInsight.isVisible()){
        console.log("User is able to see first Title Of Latest Insights")
        await FirstTitleOfLatestInsight.click()
        console.log("User is able to click on first Title Of Latest Insights");
     
     await page.locator(".mobile-home").click()
     
}
}catch (e){
    console.log("User is not able to see first Title Of Latest Insights");

}
try{
    const SecondTitleOfLatestInsight = page.locator("(//h4[@class='card-title'])[2]")//(//h4[@class='card-title'])[1]//section[contains(@class,'latest-insights')]["+(i+1)+"]//div[contains(@class,'layout')]//h4
    if(await SecondTitleOfLatestInsight.isVisible()){
        console.log("User is able to see second Title Of Latest Insights")
        await SecondTitleOfLatestInsight.click()
        console.log("User is able to click on second Title Of Latest Insights");
        await page.waitForLoadState('networkidle'); 

        await page.locator(".mobile-home").click()
}
}catch (e){
    console.log("User is not able to see second Title Of Latest Insights");

}
try{
    
    const ThirdTitleOfLatestInsight = page.locator("(//h4[@class='card-title'])[3]")//(//h4[@class='card-title'])[1]//section[contains(@class,'latest-insights')]["+(i+1)+"]//div[contains(@class,'layout')]//h4
    if(await ThirdTitleOfLatestInsight.isVisible()){
        console.log("User is able to see third Title Of Latest Insights")
        await ThirdTitleOfLatestInsight.click()
        console.log("User is able to click on third Title Of Latest Insights");
        //await page.waitForLoadState('networkidle'); 
        await page.locator(".mobile-home").click()
    

}
}catch (e){
    console.log("User is not able to see  third Title Of Latest Insights");

}
try{
    //await page.waitForLoadState('networkidle'); 
    const FirstImageOfLatestInsight = page.locator(".card-image img").nth(0)
    if(await FirstImageOfLatestInsight.isVisible()){
        console.log("User is able to see first ImageOfLatestInsights")

    }
   }catch (e){
    console.log("User is not able to first ImageOfLatestInsights");
}
try{
    await page.waitForLoadState('networkidle'); 

    const SecondImageOfLatestInsight = page.locator(".card-image img").nth(1)
    if(await SecondImageOfLatestInsight.isVisible()){
        console.log("User is able to see second ImageOfLatestInsights")

    }
   }catch (e){
    console.log("User is not able to see second ImageOfLatestInsights");
}

try{
    
    const ReadMoreInsightsButton = page.locator("[aria-label='More insights about Latest Insights Invent']")
    if(await ReadMoreInsightsButton.isVisible() ){
        console.log("User is able to see More Insights Button")
        await page.waitForLoadState('networkidle'); 
        await ReadMoreInsightsButton.click()
        console.log("User is able to click on  More Insights Button");
        await page.waitForLoadState('networkidle'); 
        await page.locator(".mobile-home").click()
    }
    
    }catch (e){
        console.log("User is not able to see More Insights Button")
    }
})

})