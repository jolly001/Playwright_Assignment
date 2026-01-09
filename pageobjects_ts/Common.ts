import {Page} from "@playwright/test";

export class Common{

        page: Page;
    constructor(page:Page){
        this.page = page;
        
    }

    async navigatToURL(url: string){
        await this.page.goto(url);
    }

}
