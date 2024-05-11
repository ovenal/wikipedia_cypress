# Wikipedia tests
The project includes tests for Wikipedia using Cypress with Typescript. The list of test cases can be found at the following link:  https://docs.google.com/document/d/1SUGRhiKwIzFsiaD20OrY95yBAQJ3dFJYSSoxxfYiy6M/edit?usp=sharing

## How to run
First install all the necessary packages by running:
```sh
npm i
```
Then start all tests with the following command:
```sh
npm run cypress:run
```
The test report will be available in the `/reports/index.html` file. It will contain detailed test reports highlighting the execution results, including both passed and failed tests. There should be one intentionally failed test; for this test an embedded screenshot will be provided. All other tests should pass.

## Items to review

In addition to routine tasks associated with locating and interacting with HTML elements, the following pieces of code may require the reviewer's attention:
 - added custom Cypress command (`cypress/support/command.ts`)
 - implemented PageObject pattern (`cypress/pages/*.ts`)
 - triggering of mouse events and calculation of elements visibility (`cypress/e2e/5_pageNavigation.cy.ts`)
 - processing of the notification dialog that may appear during page editing (`cypress/pages/EditPage.ts`)