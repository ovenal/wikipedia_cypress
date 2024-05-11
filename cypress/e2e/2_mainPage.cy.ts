import { MainPage } from "../pages/MainPage";

describe('2. Main page', () => {
  const page = new MainPage();

  it('2.1 Verify that all required content blocks are present', () => {
    const expectedPanels = [
      "From today's featured article",
      "Did you know ...",
      "In the news",
      "On this day",
      "Today's featured picture"
    ]

    page.visit();
    page.getPanelTitles().should('include.members', expectedPanels); // list of panels may be different, so we use 'include.members' condition instead of 'deep.equal'
  })
})
