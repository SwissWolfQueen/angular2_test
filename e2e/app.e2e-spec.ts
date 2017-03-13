import { KatiAppPage } from './app.po';

describe('kati-app App', () => {
  let page: KatiAppPage;

  beforeEach(() => {
    page = new KatiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
