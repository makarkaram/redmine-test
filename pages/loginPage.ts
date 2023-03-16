import { Page,Locator } from "@playwright/test"
export class LoginPage{
    readonly loginBtn: Locator
    readonly login: Locator
    readonly password: Locator
    readonly submit: Locator
    constructor(page: Page){
        this.loginBtn = page.locator('[href="/login"]')
        this.login = page.locator('#username')
        this.password = page.locator('#password')
        this.submit = page.locator('[name="login"]')
    }
    loginButton() {
        return this.loginBtn
    }
    loginField() {
        return this.login
    }
    passwordField() {
        return this.password
    }
    sumbitButton() {
        return this.submit
    }
}