const { LandingPage } = require('./LandingPage');
const { ItemListing } = require('./ItemListing');
const {Common} = require('./Common');

class POManager {

    constructor(page) {
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
module.exports = { POManager };