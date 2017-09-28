import { BasicCartApplicationPage } from './app.po';

describe('basic-cart-application App', () => {
  let page: BasicCartApplicationPage;

  beforeEach(() => {
    page = new BasicCartApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
