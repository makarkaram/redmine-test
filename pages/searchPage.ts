import { Page,Locator } from "@playwright/test"
export class SearchPage{
    readonly searchInput: Locator
    readonly result: Locator
    constructor(page: Page){
        this.searchInput = page.locator('[class="small"]')
        this.result = page.locator('[href="/projects/redmine/wiki/Changelog_5_0"]')
    }
    registerButton() {
       return this.searchInput
}
    resultLoc() {
    return this.result
}
}