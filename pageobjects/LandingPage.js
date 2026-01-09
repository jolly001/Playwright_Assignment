class LandingPage{


    constructor(page){
        this.page = page;
        this.allowCookie = page.getByRole('button', { name: 'ALLE ERLAUBEN' });


    }


}
module.exports = {LandingPage};