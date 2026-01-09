
import {test, expect} from "@playwright/test";

import {POManager} from "../pageobjects_ts/POManager";
import datasetItemListingPage from "../utils/ItemListingPageTestData.json";
import datasetCommon from "../utils/CommonTestDAta.json";
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