import { HomeTeacherAppPage } from './app.po';

describe('home-teacher-app App', () => {
  let page: HomeTeacherAppPage;

  beforeEach(() => {
    page = new HomeTeacherAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
