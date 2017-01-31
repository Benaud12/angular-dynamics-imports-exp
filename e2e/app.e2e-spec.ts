import { HelloWorldDependencyPage } from './app.po';

describe('hello-world-dependency App', function() {
  let page: HelloWorldDependencyPage;

  beforeEach(() => {
    page = new HelloWorldDependencyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
