// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress {
  interface Chainable {
    /**
     * Asserts that the current URL matches the expected URL.
     * @example cy.assertUrl('https://example.com/profile')
     */
    assertWikiUrl(expectedUrl: string): Chainable;
    assertInViewport(): Chainable;
    assertOutViewport(): Chainable;
  }
}

Cypress.Commands.add('assertWikiUrl', (expected: string) => {
  const normalizedText = expected
    .replace(' ', '_')
    .replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
  cy.url().should('match', new RegExp(`wiki/${normalizedText}`));
});

Cypress.Commands.add('assertInViewport', { prevSubject: true }, (subject) => {
  expect(isInViewport(subject[0]), "Element is visible, but placed outside of viewport").to.be.true;
});

Cypress.Commands.add('assertOutViewport', { prevSubject: true }, (subject) => {
  expect(isInViewport(subject[0]), "Element is visible, but placed inside viewport").to.be.false;
});

function isInViewport(element: any) {
  const rect = element.getBoundingClientRect();
  const windowHeight = Cypress.config('viewportHeight');
  const windowWidth = Cypress.config('viewportWidth');

  return rect.bottom > 0 
    && rect.left <= windowWidth 
    && rect.right > 0 
    && rect.top <= windowHeight
}