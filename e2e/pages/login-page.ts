import type { Page } from '@playwright/test';
import type { Locator } from '@playwright/test';
import { UserType, allUsersPassword } from '../../helpers/user-info';

export class LoginPage {
    page: Page;
    //Button locators
    loginButton: Locator;
    //Field locators
    usernameField: Locator;
    passwordField: Locator
    //User prompts/validation error locators
    usernameRequiredErrorMessage: Locator;
    passwordRequiredErrorMessage: Locator;
    constructor(page: Page) {
        this.page = page;
        //Button locators
        this.loginButton = this.page.locator('[data-test="login-button"]');
        //Field locators 
        this.usernameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        //User prompts/validation error locators
        this.usernameRequiredErrorMessage = this.page.locator('div').filter({ hasText: /^Epic sadface: Username is required$/ });
        this.passwordRequiredErrorMessage = this.page.locator('div').filter({ hasText: /^Epic sadface: Password is required$/ });
    }

    async goToLoginPage() {
        await this.page.goto('/')
    }

    async logIn(userType: UserType) {
        switch (userType) {
            case UserType.standardUser:
                await this.usernameField.fill(UserType.standardUser);
                break
            case UserType.errorUser:
                await this.usernameField.fill(UserType.errorUser);
                break
            case UserType.lockedOutUser:
                await this.usernameField.fill(UserType.lockedOutUser);
                break
            case UserType.performanceGlitchUser:
                await this.usernameField.fill(UserType.performanceGlitchUser);
                break
            case UserType.problemUsername:
                await this.usernameField.fill(UserType.problemUsername);
                break
            case UserType.visualUser:
                await this.usernameField.fill(UserType.visualUser);
                break
        }
        await this.passwordField.fill(allUsersPassword);
    }
}