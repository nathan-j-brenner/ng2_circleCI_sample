import { Ng2CircleCISamplePage } from './app.po';

describe('ng2-circle-ci-sample App', function() {
  let page: Ng2CircleCISamplePage;

  beforeEach(() => {
    page = new Ng2CircleCISamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
