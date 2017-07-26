import { CbFrontPage } from './app.po';

describe('cb-front App', () => {
  let page: CbFrontPage;

  beforeEach(() => {
    page = new CbFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
