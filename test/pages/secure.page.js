import Page from './page';
import verifications from '../../resource/verification';

class SecurePage extends Page {
  get lblSuccessMessage() {return $('[class="flash success"]');}

  verifySuccessMessage(expectedText) {
    verifications.verifyElementContainText(this.lblSuccessMessage, expectedText);
  }
}

export default new SecurePage();
