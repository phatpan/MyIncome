import { MyIncomePage } from './app.po';

describe('my-income App', () => {
  let page: MyIncomePage;

  beforeEach(() => {
    page = new MyIncomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
