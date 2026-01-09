const {test, expect, browser} = require('@playwright/test');
const {ItemListing} = require('../pageobjects/ItemListing');
const { POManager} = require('../pageobjects/POManager');
const datasetItemListingPage = require('../utils/ItemListingPageTestData.json');
const datasetCommon = require('../utils/CommonTestDAta.json');
test('Display SALE items', async ({page})=>{

        const poManager = new POManager(page);
        const itemListingPage = poManager.getItemListing();
        const common = poManager.getCommon();
    await common.navigatToURL(datasetCommon.saleUrl);
    const title = await page.title();
    expect (title).toContain(datasetItemListingPage.title);
    await itemListingPage.saleItemDisplay();

})

test('Display NEW items', async({page})=>{
    
   const poManager = new POManager(page);
    const itemListingPage = poManager.getItemListing();
    const common = poManager.getCommon();
    await common.navigatToURL(datasetCommon.newUrl);
    const title = await page.title();
    expect ( title).toContain(datasetItemListingPage.title);
    await itemListingPage.newItemDisplay();


})