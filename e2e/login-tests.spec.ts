import { test, expect } from '@playwright/test';
import { LoginPage } from '../tests/pages/login-page';

test.describe('Log in tests', async() => {
    test.beforeEach('', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
    });
    test('Given I am a standard user, when I am on the login page, then I can enter my credentials to log in.', async ({ page }) => {
        
    });
});

    
 













/* 

test.describe('Log in tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page)
)
}
   
    test('Given I am a standard user, when I am on the login page, then I can enter my credentials to log in.', async ({ page }) => {
    const loginPage = new LoginPage(page);
})


}); */