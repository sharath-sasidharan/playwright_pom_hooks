exports.LoginPage = class LoginPage {
  constructor(page) {
    (this.page = page),
      (this.loginLink = "#login2"),
      (this.userNameInput = "#loginusername"),
      (this.passwordInput = "#loginpassword"),
      (this.submitButton = "//button[normalize-space()='Log in']");
  }

  // Launch the website
  async navigateToLoginPage() {
    await this.page.goto("https://demoblaze.com/");
  }

  //Click on the login link
  async loginMenu() {
    await this.page.locator(this.loginLink).click();
  }

  // Fill the details
  async loginDetails(username, password) {
    await this.page.locator(this.userNameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
  }

  // Click on the login button
  async submitButtonClick() {
    await this.page.locator(this.submitButton).click();
  }
};
