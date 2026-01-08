class LandingPage{


    constructor(page){
        this.page = page;
        this.allowCookie = page.getByRole('button', { name: 'ALLE ERLAUBEN' });


    }

    async navigateToUrl(url){
        await this.page.goto(url);
        await this.allowCookie.click();
        
    
    }

}
module.exports = {LandingPage};