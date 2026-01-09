class Common{

    constructor(page){
        this.page = page;
        
    }

    async navigatToURL(url){
        await this.page.goto(url);
    }

}
module.exports = {Common};