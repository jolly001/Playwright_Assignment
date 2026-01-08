const {test, expect, browser} = require('@playwright/test');
const {LandingPage} = require('../pageobjects/LandingPage');
const dataset = require('../utils/LandingPageTestData.json');



test('Verify the url is correct', async ({page})=>{
    
    // navigating to the url
   const landingPage = new LandingPage(page);
   await landingPage.navigateToUrl(dataset.url);
    
    const pageTitle = await page.title();
   
    expect(await page.title()).toContain("Online-Parfümerie");

})



