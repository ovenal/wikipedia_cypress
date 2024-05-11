import { MainPage } from "../pages/MainPage";

describe('1. Search tests', () => {
  const page = new MainPage();
  const suffixCommonlyRefersTo = 'most commonly refers to:';
  const suffixMayReferTo = 'may also refer to:';

  it('1.1 Serch by common word that returns several results', () => {
    const searchValue = 'Aura';
    page.visit();
    page.search(searchValue);

    cy.assertWikiUrl(searchValue);
    page.getTitleElement().should('have.text', searchValue);
    page.getBodyElement()
      .should('contain.text', `${searchValue} ${suffixCommonlyRefersTo}`)
      .and('contain.text', `${searchValue} ${suffixMayReferTo}`);
  })

  it('1.2 Search for a specific phrase from the search box and verify that a specific page is opened.', () => {
    const searchValue = 'Aura (mythology)';
    const articleTextFragment = 'In Greek and Roman mythology, Aura';

    page.visit();
    page.search(searchValue);
    cy.assertWikiUrl(searchValue);
    page.getTitleElement().should('have.text', searchValue);
    page.getBodyElement()
      .should('contain.text', articleTextFragment)
      .should('not.contain.text', `${searchValue} ${suffixCommonlyRefersTo}`)
      .and('not.contain.text', `${searchValue} ${suffixMayReferTo}`);
  })

})
