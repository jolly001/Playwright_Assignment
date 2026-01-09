const dataset = require('../utils/ItemListingPageTestData.json');
import {Locator, Page} from "@playwright/test";

export class ItemListing{
    page:Page;
    totalItemBox: Locator;
    itemTagOfSale: Locator;
    itemTagOfNew: Locator;

    constructor(page:Page){
        this.page = page;
        this.totalItemBox = page.locator(".product-tile__icon-wrapper");
        this.itemTagOfSale = page.locator(".product-tile__icon-wrapper .eyecatcher");
        this.itemTagOfNew = page.locator("//div/div//div[@data-testid='product-eyecatcher-computedNewFlag']");

    }


    async saleItemDisplay(){
        let totalItems = await this.totalItemBox.count(); 
        let tag = await this.itemTagOfSale.innerText();
        for(let i =0; i< totalItems; i++){
            if(tag===dataset.itemTagSale){

                console.log("Total Items with SALE tag is: "+ await this.itemTagOfSale.count());
                break;
        }
    
    }
 }
 async newItemDisplay(){
        let totalItems = await this.totalItemBox.count();
        let tag = await this.itemTagOfNew.allInnerTexts();
        for(let i =0; i< totalItems; i++){
            if(tag.includes(dataset.itemTagNew)){
                
                console.log("Total Items with NEW tag is: "+ await this.itemTagOfNew.count());
                break;
        }
    
    }
 }


}
 

