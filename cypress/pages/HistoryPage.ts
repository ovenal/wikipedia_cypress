export class HistoryPage {

  public getTitleElement() {
    return cy.get('#firstHeading');
  }

  public getCompareRevisionsButton() {
    return cy.get('input.historysubmit');
  }

  public getRevisionItems() {
    return cy.get('li.mw-tag-wikieditor')
  }

}
