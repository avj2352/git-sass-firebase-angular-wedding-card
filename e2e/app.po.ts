import { browser, by, element } from 'protractor';

export class NgSassFirebaseExpressPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
