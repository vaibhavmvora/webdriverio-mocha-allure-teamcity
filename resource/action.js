import chai from 'chai';
import AllureReporter from '@wdio/allure-reporter';
class Actions {
  clickOnElement(element) {
    element.waitForExist({ timeout: 60000 });
    if (element.isDisplayed()) {
      const elementName = element.getAttribute('name');
      element.click();
      AllureReporter.addStep('Successfully clicked on element : ' + elementName);
    }
    else {
      chai.expect.fail('The element is not displayed on the screen');
    }
  }
  setValueTextbox(element, value) {
    element.waitForExist({ timeout: 60000 });
    if (element.isDisplayed()) {
      const elementName = element.getAttribute('name');
      element.setValue(value);
      AllureReporter.addStep('Successfully set value ' + value + ' on element : ' + elementName);
    }
    else {
      chai.expect.fail('The element is not displayed on the screen');
    }
  }
}
export default new Actions();
