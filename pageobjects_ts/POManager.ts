import { LandingPage }  from "./LandingPage";
import { ItemListing } from "./ItemListing";
import {Common} from "./Common";
import{Page} from "@playwright/test";

export class POManager {

    landingPage: LandingPage;
    itemListingPage: ItemListing;
    common: Common;
    page: Page;
    constructor(page:Page) {
        this.page = page;   
        this.landingPage = new LandingPage(this.page);
        this.itemListingPage = new ItemListing(this.page);
        this.common = new Common(this.page);
        

    }

    getLandingPage() {
        return this.landingPage;
    }

    getItemListing() {
        return this.itemListingPage;

    }

    getCommon(){
        return this.common;
    }


}
