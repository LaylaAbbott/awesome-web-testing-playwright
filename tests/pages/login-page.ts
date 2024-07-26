import { Locator, Page } from '@playwright/test';
import { UserType } from '../../helpers/user-info';
import dotenv from 'dotenv'
dotenv.config(); 

export class LoginPage {
    readonly page: Page;
    //Button locators
    readonly loginButton: Locator;
    //Field locators
    readonly usernameField: Locator;
    readonly passwordField: Locator
    //User prompts/validation error locators
    readonly usernameRequiredErrorMessage : Locator;
    readonly passwordRequiredErrorMessage : Locator;
    constructor(page: Page) {
        this.page = page;
        //Button locators
        this.loginButton = page.locator('[data-test="login-button"]');
        //Field locators 
        this.usernameField = page.locator('[data-test="username"]');
        this.passwordField = page.locator('[data-test="password"]');
        //User prompts/validation error locators
        this.usernameRequiredErrorMessage = page.locator('div').filter({ hasText: /^Epic sadface: Username is required$/ });
        this.passwordRequiredErrorMessage = page.locator('div').filter({ hasText: /^Epic sadface: Password is required$/ });
    }

    async goToLoginPage(){
        await this.page.goto("https://www.saucedemo.com/")
    }

    async logIn(userType: UserType){
        switch (userType){
            case UserType.standardUser:
                await this.usernameField.fill(process.env.STANDARD_USERNAME);
                break
            case UserType.errorUser:
                await this.usernameField.fill(process.env.ERROR_USERNAME);
                break
            case UserType.lockedOutUser:
                await this.usernameField.fill(process.env.LOCKED_OUT_USERNAME);
                break
            case UserType.performanceGlitchUser:
                await this.usernameField.fill(process.env.PERFORMANCE_GLITCH_USERNAME);
                break
            case UserType.problemUsername:
                await this.usernameField.fill(process.env.PROBLEM_USERNAME);
                break
            case UserType.visualUser:
                await this.usernameField.fill(process.env.VISUAL_USERNAME);
                break
        }
        await this.passwordField.fill(process.env.ALL_USERS_PASSWORD);
    }

}