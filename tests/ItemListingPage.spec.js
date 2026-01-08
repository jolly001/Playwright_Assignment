const {test, expect, browser} = require('@playwright/test');
const {ItemListing} = require('../pageobjects/ItemListing');
const dataset = require('../utils/ItemListingPageTestData.json');

test('Display SALE items', async ({page})=>{

    const itemListingPage =  new ItemListing(page);
    await itemListingPage.navigateToUrl(dataset.saleUrl);
    const title = await page.title();
    expect (await page.title()).toContain(dataset.title);
    await itemListingPage.saleItemDisplay();

})

test('Display NEW items', async({page})=>{
    
    const itemListingPage =  new ItemListing(page);
    await itemListingPage.navigateToUrl(dataset.newUrl);
    const title = await page.title();
    expect (await page.title()).toContain(dataset.title);
    await itemListingPage.newItemDisplay();


})