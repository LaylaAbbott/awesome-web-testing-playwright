import type { Page } from '@playwright/test';
import type { Locator } from '@playwright/test';


export class InventoryPage {
    page: Page;
    //Button locators
    openMenuButton : Locator
    //Field locators
    //User prompts/validation error locators
    constructor(page: Page) {
        this.page = page;
        //Button locators
        this.openMenuButton= this.page.getByRole('button', { name: 'Open Menu' })
        //Field locators 
        //User prompts/validation error locators
    }
}