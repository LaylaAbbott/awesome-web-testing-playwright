import type { Page } from '@playwright/test';
import type { Locator } from '@playwright/test';

export class InventoryPage {
    page: Page;
    inventoryPageUrl: string;
    //Button locators
    openMenuButton : Locator;
    logOutButton:Locator;
    //Field locators
    //User prompts/validation error locators
    constructor(page: Page) {
        this.page = page;
        this.inventoryPageUrl = '/inventory.html';
        //Button locators
        this.openMenuButton= this.page.getByRole('button', { name: 'Open Menu' })
        this.logOutButton= this.page.locator('[data-test="logout-sidebar-link"]')
        //Field locators 
        //User prompts/validation error locators
    }
}