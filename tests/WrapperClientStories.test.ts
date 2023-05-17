
import { test, expect } from '@playwright/test';


test.describe("Testcase of Capgemini",async()=>{


    test("Testcase of Wrapper Card Text Pic Editor",async({page})=>{
    
   await page.goto("https://www.capgemini.com/in-en/")
   await page.locator("#macs_cookies_accept_all").click()
   await page.waitForTimeout(3000)
   try
   {
       
    const slideList = page.locator("//section[contains(@class, 'wrapper-client-stories')]//div[@class='slider-list']")
    if(slideList.size()>0)
    try{
        const ClientStoriesSliderSection = page.locator("//section[contains(@class,'wrapper-client-stories')]//div[contains(@class,'slider-nav-wrapper')]/div)[1]")
    }
   }