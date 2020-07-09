import chai from 'chai';
class Verifications {
  verifyElementContainText(element, expectedText) {
    element.waitForExist({ timeout: 60000 });
    if (element.isDisplayed()) {
      const actualText = element.getText();
      chai.expect(actualText).to.contain(expectedText, 'Expected value did not matched with actual value');
    }
    else {
      chai.expect.fail('The element is not displayed on the screen');
    }
  }
}
export default new Verifications();
