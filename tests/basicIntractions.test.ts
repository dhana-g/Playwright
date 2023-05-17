
import { expect,test } from "@playwright/test"

test("", async ({page}) => {
await page.goto("https://www.Lambdatest.com/selenium-playground/simple-form-demo")
const messageInput = page.locator("sum1");
console.log(await messageInput.getAttribute("placeholder"));
expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
console.log(await messageInput.inputValue());

await messageInput.type("Hi dhana");

})
test("sum", async({ page }) =>{
    await page.goto("https://www.Lambdatest.com/selenium-playground/simple-form-demo")
    const sum1input = page.locator("sum1")
    const sum2input = page.locator("sum2")

    const getValuesBtn = page.locator("//button[text()='Get values']")
    let num1 = 121;
    let num2 = 546;
    await sum1input.type("" + num1);
    await sum2input.type("" + num2);
    await getValuesBtn.click()
    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult)

})

public static WebElement MeetOurPeopleAllowCokkies(WebDriver driver)
	{
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(60));
		WebElement allowAllCoockies=wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='macs_cookies_accept_all']")));
		return allowAllCoockies;
	}

    async function meetOurPeopleAllowCookies(page: Page): Promise<ElementHandle> {
        const waitForSec = Duration.ofSeconds(60);
        const allowAllCookiesXPath = '//*[@id="macs_cookies_accept_all"]';
        return page.waitForXPath(allowAllCookiesXPath, {
            visible: true,
            timeout: waitForSec
        });
    }