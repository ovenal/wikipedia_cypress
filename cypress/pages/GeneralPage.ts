export class GeneralPage {
  protected searchInput = '#searchform [name="search"]';
  protected searchButton = '#searchform button.cdx-search-input__end-button';

  public visit(path: string) {
    cy.visit(path);
  }

  public getBodyElement() {
    return cy.get('#bodyContent');  
  }

  public getTitleElement() {
    return cy.get('#firstHeading');
  }

  public getPreviewWarningElement() {
    return cy.get('div.previewnote');
  }

  public getTooltipElement() {
    return cy.get('div[role="tooltip"]');
  }

  public getCitationLink(index: string) {
    return cy.get(`sup[id="cite_ref-${index}"] a`);
  }

  public getCitationItem(index: string) {
    return cy.get(`div.reflist li[id="cite_note-${index}"]`);
  }

  public search(value: string) {
    cy.get(this.searchInput).type(value);
    cy.get(this.searchButton).click();
  }

  public edit() {
    cy.get('#ca-edit').click();
  }

  public viewHistory() {
    cy.get('#ca-history').click();
  }
}
