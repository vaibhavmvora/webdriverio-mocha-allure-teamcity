import Page from './page';
import action from '../../resource/action';

class LoginPage extends Page {
  get txtUsername() {return $('#username');}
  get txtPassword() {return $('#password');}
  get btnLogin() {return $('[type="submit"]');}

  open() {
    super.open('login');
    return this;
  }

  doLogin(user) {
    action.setValueTextbox(this.txtUsername, user.username);
    action.setValueTextbox(this.txtPassword, user.password);
    action.clickOnElement(this.btnLogin);
  }
}

export default new LoginPage();
