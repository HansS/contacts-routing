import { ContactsRoutingPage } from './app.po';

describe('contacts-routing App', () => {
  let page: ContactsRoutingPage;

  beforeEach(() => {
    page = new ContactsRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
