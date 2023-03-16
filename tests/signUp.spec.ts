import { test, expect } from '@playwright/test';
import { SingUpPage } from '../pages/singUpPage'
import { TextGenerator } from '../pages/helper'
import { LoginPage } from '../pages/loginPage'
import { SearchPage } from '../pages/searchPage'
import { DownloadPage } from '../pages/downloadPage'
import { ProjectPage } from '../pages/projectPage'

let singUpPage : SingUpPage
let textgen : TextGenerator
let loginPage : LoginPage
let searchPage: SearchPage
let downloadPage: DownloadPage
let projectPage: ProjectPage

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.redmine.org/');
      singUpPage = new SingUpPage(page)
      textgen = new TextGenerator()
      loginPage = new LoginPage(page)
      searchPage = new SearchPage(page)
      downloadPage = new DownloadPage(page)
      projectPage = new ProjectPage(page)
})
test.describe('singUp radmin test', () => {
  test('test singUp with valid credentials', async ({ page }) => {
      await singUpPage.registerButton().click()
      await singUpPage.LoginField().fill(textgen.randomText())
      let password = textgen.randomText()
      await singUpPage.passwordField().fill(password)
      await singUpPage.passConfField().fill(password)
      await singUpPage.firstNameField().fill(textgen.randomText())
      await singUpPage.lastNameField().fill(textgen.randomText())
      await singUpPage.emailField().fill(textgen.randomEmail())
      await singUpPage.nicknameField().fill(textgen.randomText())
      await singUpPage.sendButn().click({trial: true })
  });
  test('test login with invalid credentials', async ({ page }) => {
   await loginPage.loginButton().click()
   await loginPage.loginField().fill(textgen.randomText())
   await loginPage.passwordField().fill(textgen.randomText())
   await loginPage.sumbitButton().click()
  })
  test('validate search', async ({ page }) => {
   await searchPage.registerButton().click()
   await searchPage.registerButton().fill('Changelog 5.0.x')
   await searchPage.registerButton().press('Enter');
   await expect(searchPage.resultLoc()).toHaveText('Wiki: Changelog_5_0');
  })
  test('Donload links is visible', async ({ page }) => {
  await downloadPage.downloadButton().click()
  await expect(downloadPage.downloadLinkOne()).toBeVisible();
  await expect(downloadPage.downloadLinkSec()).toBeVisible();
  await expect(downloadPage.downloadLinkThird()).toBeVisible();
  })
  test.only('admin Gavatare is visible', async ({ page }) => {
    await projectPage.projectButton().click()
    await projectPage.redminButton().click()
    await projectPage.adminButton().click()
    await expect(projectPage.ImageGavatar()).toBeVisible();
  })
})
