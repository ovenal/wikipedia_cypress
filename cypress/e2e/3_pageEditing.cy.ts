import { EditPage } from "../pages/EditPage";
import { GeneralPage } from "../pages/GeneralPage";

describe('3. Page editing', () => {
  const page = new GeneralPage();
  const editPage = new EditPage();
  const url = '/wiki/Aura_(mythology)';

  it('3.1 Start editing any page and verify that the user can see a preview of the changes made.', () => {
    const addedText = `It's unique text: ${Date.now()}`;
    
    page.visit(url);
    page.getPreviewWarningElement().should('not.exist');

    page.edit();
    editPage.addTextToArticle(addedText).then(() => {
      editPage.showPreview();
      page.getPreviewWarningElement().should('be.visible');
      page.getBodyElement()
        .should('contain.text', addedText);
    });
  })
})
