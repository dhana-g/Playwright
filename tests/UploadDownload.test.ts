import { expect, test } from "@playwright/test";

test("Download files", async({ page }) =>{
await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo")
await page.type("#textbox","Hello welcome to my code");
await page.click("id=create");
 const download = await Promise.all([
       page.waitForEvent("download"),
       page.click("id=link-to-download")
 ])

 const filename = download[0].suggestedFilename()
 await download[0].saveAs(filename);
})

test ("Upload files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jquery-file-upload/")
    //await page.setInputFiles("input[tpe='file']",
    // ["file1","file2"]);

// uploading based on filechooser 
    const [uploadFiles] = await Promise.all([
       page.waitForEvent("filechooser"),
       page.click("input[type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);
    uploadFiles.setFiles(
      ["file1","file2"]
    )

})