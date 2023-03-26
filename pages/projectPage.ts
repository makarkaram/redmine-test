import { Page,Locator } from "@playwright/test"
export class ProjectPage{
    readonly projectBtn: Locator
    readonly redminBtn: Locator
    readonly adminBtn: Locator
    readonly imgGravatar:Locator
    constructor(page: Page){
        this.projectBtn = page.locator('[href="/projects"]')
        this.redminBtn = page.locator('[href="/projects/redmine"]')
        this.adminBtn = page.locator('[href="/users/1"]')
        this.imgGravatar = page.locator('[href="/activity?from=2023-03-24&user_id=1"]')
    }
    projectButton() {
    return this.projectBtn
    }
    redminButton() {
        return this.redminBtn
    }
    adminButton() {
        return this.adminBtn
    }
    ImageGavatar() {
        return this.imgGravatar
    }
}   
