import { SalesAnalysisFEPage } from './app.po';

describe('sales-analysis-fe App', () => {
  let page: SalesAnalysisFEPage;

  beforeEach(() => {
    page = new SalesAnalysisFEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
