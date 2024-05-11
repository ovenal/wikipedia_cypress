import { GeneralPage } from "./GeneralPage";

export class MainPage extends GeneralPage {

  public visit() {
    cy.visit('/wiki/Main_Page');
  }

  public getPanelTitles() {
    let titles = [];
    return cy.get("div.MainPageBG h2").each($headerElement => {
      titles.push($headerElement.text().trim().replace(/\u00A0/g, ' ')); // nbsp character may break comparison logic 
    }).then(() => {
      return titles;
    });
  }
}
