import loginPage from '../pages/login.page';
import securePage from '../pages/secure.page';
import { context } from '../data/Context';

describe('Login Page Suite', function() {
  it('check the valid login', function() {
    loginPage
        .open()
        .doLogin(context.loginData.user);
    securePage
        .verifySuccessMessage('You logged into a secure area!');
  });
});
