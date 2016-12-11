import { browser, element, by } from 'protractor';

export class ScholarQuestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sq-root h1')).getText();
  }
}
