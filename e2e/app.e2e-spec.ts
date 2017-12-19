import { NgSassFirebaseExpressPage } from './app.po';

describe('ng-sass-firebase-express App', () => {
  let page: NgSassFirebaseExpressPage;

  beforeEach(() => {
    page = new NgSassFirebaseExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
