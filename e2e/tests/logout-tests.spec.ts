import { test } from "../../fixtures/fixtures";
import { expect } from "@playwright/test";
import { UserType } from "../../helpers/user-info";

test.describe('Log out tests', async () => {
    const userTypes = [UserType.standardUser, UserType.errorUser, UserType.lockedOutUser, UserType.performanceGlitchUser, UserType.problemUsername, UserType.visualUser]
    for (var userType of userTypes) {
        test.beforeEach('Navigate to log in page, and log in', async ({ page, loginPage}) => {
            //Arrange
            await page.goto('/');
            await loginPage.logIn(userType);
            expect(page.url()).toBe('/inventory.html')
        });
        test(`Given I am a ${userType}, when I am logged in then I am able to log back out.`, async ({page, inventoryPage }) => {
            //Act
            await inventoryPage.openMenuButton.click();
            await inventoryPage.logOutButton.click();
            //Assert
            expect(page.url()).toBe('/')
        });
    }
})