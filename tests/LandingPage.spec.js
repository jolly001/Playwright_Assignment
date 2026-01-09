const {test, expect, browser} = require('@playwright/test');
//const {LandingPage} = require('../pageobjects/LandingPage');
const { POManager} = require('../pageobjects/POManager');
const datasetLandingPage = require('../utils/LandingPageTestData.json');
const datasetCommon = require('../utils/CommonTestDAta.json');

test('Verify the url is correct', async ({page})=>{
    
    // navigating to the url
    const poManager = new POManager(page);
   const landingPage = poManager.getLandingPage();
   const common = poManager.getCommon();
   //await landingPage.navigateToUrl(dataset.url);
   await common.navigatToURL(datasetCommon.URL);
    
    const pageTitle = await page.title();
   
    expect(pageTitle).toContain(datasetLandingPage.pageTitle);

})



