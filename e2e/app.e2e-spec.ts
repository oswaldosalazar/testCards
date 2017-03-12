import { TestCardsPage } from './app.po';

describe('test-cards App', () => {
  let page: TestCardsPage;

  beforeEach(() => {
    page = new TestCardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
