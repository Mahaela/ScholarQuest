import { ScholarQuestPage } from './app.po';

describe('scholar-quest App', function() {
  let page: ScholarQuestPage;

  beforeEach(() => {
    page = new ScholarQuestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sq works!');
  });
});
