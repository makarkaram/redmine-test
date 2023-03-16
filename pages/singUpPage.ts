import { Page,Locator } from "@playwright/test"
export class SingUpPage{
   readonly registr: Locator
   readonly login: Locator
   readonly password: Locator
   readonly passConf: Locator
   readonly firstName: Locator
   readonly lastName: Locator
   readonly email: Locator 
   readonly nickname: Locator
   readonly sendButton: Locator
         constructor(page: Page){
            this.registr = page.locator('[href="/account/register"]')
            this.login = page.locator('#user_login')
            this.password = page.locator('#user_password')
            this.passConf = page.locator('#user_password_confirmation')
            this.firstName = page.locator('#user_firstname')
            this.lastName = page.locator('#user_lastname')
            this.email = page.locator('#user_mail')
            this.nickname = page.locator('#user_custom_field_values_3')
            this.sendButton = page.locator('[type="submit"]')
         }
         registerButton() {
            return this.registr
         }
         LoginField() {
            return this.login
         }
         passwordField() {
            return this.password
         }
         passConfField() {
            return this.passConf
         }
         firstNameField() {
            return this.firstName
         }
         lastNameField() {
            return this.lastName
         }
         emailField() {
            return this.email
         }
         nicknameField() {
            return this.nickname
         }
         sendButn() {
            return this.sendButton
         }

        
}

