
import {Locator, Page} from "@playwright/test";

export class LandingPage{


    page: Page;
    allowCookie:Locator;

    constructor(page:Page){
        this.page = page;
        this.allowCookie = page.getByRole('button', { name: 'ALLE ERLAUBEN' });


    }


}
