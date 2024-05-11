import { GeneralPage } from "../pages/GeneralPage";
import { HistoryPage } from "../pages/HistoryPage";

describe('4. Page history', () => {
  const page = new GeneralPage();
  const historyPage = new HistoryPage();
  const url = '/wiki/Aura_(mythology)';
  const title = "Aura (mythology)";

  it('4.1 Open the history page for the Main Page and check that the main elements are present', () => {
    page.visit(url);

    page.viewHistory();
    historyPage.getTitleElement().should('have.text', `${title}: Revision history`);
    historyPage.getRevisionItems()
      .should('have.length.greaterThan', 0)
      .each($item => {
        expect($item.text()).includes('curprev');
      });
  })
})
