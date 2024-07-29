import { test as base } from '@playwright/test';
import { LoginPage } from '../e2e/pages/login-page';

type Pages = {
  loginPage : LoginPage;
};

export const test = base.extend<Pages>({
  loginPage : async ({page}, use) => {
    //Set up fixture
    const loginPage = new LoginPage(page);
    //Use value in the test
    await use(loginPage);
  }
})