import { test as base } from '@playwright/test';
import { LoginPage } from '../e2e/pages/login-page';
import { InventoryPage } from '../e2e/pages/inventory-page';

type Pages = {
  loginPage : LoginPage;
  inventoryPage : InventoryPage;
};

export const test = base.extend<Pages>({
  loginPage : async ({page}, use) => {
    //Set up fixture
    const loginPage = new LoginPage(page);
    //Use value in the test
    await use(loginPage);
  },
  inventoryPage : async ({page}, use) => {
    //Set up fixture
    const inventoryPage = new InventoryPage(page);
    //Use value in the test
    await use(inventoryPage);
  }
})