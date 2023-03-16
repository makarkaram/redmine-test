import { Page,Locator } from "@playwright/test"
export class DownloadPage{
    readonly downloadBtn: Locator
    readonly downloadLink1: Locator
    readonly downloadLink2: Locator
    readonly downloadLink3: Locator
    constructor(page: Page){
        this.downloadBtn = page.locator('[class="download"]')
        this.downloadLink1 = page.locator('[href="/releases/redmine-4.2.10.tar.gz"]')
        this.downloadLink2 = page.locator('[href="/releases/redmine-4.2.10.zip"]')
        this.downloadLink3 = page.locator('[href="/releases/redmine-5.0.5.tar.gz"]')
    }
    downloadButton() {
        return this.downloadBtn
    }
    downloadLinkOne() {
        return this.downloadLink1
    }
    downloadLinkSec() {
        return this.downloadLink2
    }
    downloadLinkThird() {
        return this.downloadLink3
    }
    
}