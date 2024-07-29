import { test } from "../../fixtures/fixtures";
import { UserType} from "../../helpers/user-info";
/* 
test.describe('Validating that the inventory page cannot be accessed', async () => {
}) */

test.describe('Log in tests', async () => {
    const userTypes = [UserType.standardUser, UserType.errorUser, UserType.lockedOutUser, UserType.performanceGlitchUser, UserType.problemUsername, UserType.visualUser]
    for (var userType of userTypes) {
        test.beforeEach('Navigate to page', async ({ page }) => {
            await page.goto('/');
        });
        test(`Given I am a ${userType}, when I am on the login page, then I can enter my credentials to log in.`, async ({ loginPage }) => {
            await loginPage.logIn(userType);
        });
    }
})


