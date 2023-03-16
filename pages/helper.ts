import { Page,Locator, LocatorScreenshotOptions } from "@playwright/test"
export class TextGenerator{
    randomText() {
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charLength = chars.length;
        var result = '';
        for ( var i = 0; i < 15; i++ ) {
            result += chars.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }
        randomEmail() {
            var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var charLength = chars.length;
            var result = '';
            for ( var i = 0; i < 15; i++ ) {
                result += chars.charAt(Math.floor(Math.random() * charLength));
            }
            return (result + '@gmail.com')
           
        }
    }