export class EditPage {
  public addTextToArticle(text: string) {

    return cy.get('textarea#wpTextbox1')
      .focus()
      .then(element => {
        // after setting focus "Welcome to editing" dialog may appear, so we need to catch and process it
        cy.get('span.oo-ui-labelElement-label:contains("Start editing"):visible', { timeout: 3000 }).then(($element) => { // not very realiable selector 
          if ($element.length > 0) {
            cy.wrap($element).click();
          }
        })
        // return the same element so we can continue to operate with it
        return cy.wrap(element);
      })
      .type('{ctrl}{home}') // Moves cursor to start
      .type(text);
  }

  public showPreview() {
    cy.get('#wpPreview').click();
  }
}
