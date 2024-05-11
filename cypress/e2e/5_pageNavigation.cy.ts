import { GeneralPage } from "../pages/GeneralPage";

describe('5. Page navigation', () => {
  const page = new GeneralPage();
  const url = '/wiki/Aura_(mythology)';

  it('5.1 Open any page and verify that a citation can be viewed in a popup and that the user can navigate by it.', () => {
    const citationId = "2";
    const citationText = "Quintus Smyrnaeus, The Fall of Troy 1.684";

    page.visit(url);

    page.getTooltipElement().should('not.exist');
    // we need to focus a link and wait a bit, mouseover event may not have any effect without this wait sometimes
    page.getCitationLink(citationId).focus().wait(500).trigger('mouseover').trigger('mouseover').then($link => {
      page.getTooltipElement()
        .should('be.visible')
        .should('contain.text', citationText);
      cy.wrap($link)
        .click()
        .then(() => {
          // page should be scrolled to the citation block
          page.getTooltipElement().assertOutViewport(); 
          page.getTitleElement().assertOutViewport(); 
          page.getCitationItem(citationId).assertInViewport();
      });
    })
  })

  it('!!! This is intentially failing tests to see that the report shows the screenshots', () => {
    page.visit(url);

    cy.get('bad_locator that should not be found').click();
  })
})
