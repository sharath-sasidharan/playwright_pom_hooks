exports.HomePage = class HomePage {
  constructor(page) {
    (this.page = page), (this.logoutMenu = "#logout2");
  }

  //Click on the Logout link
  async loginOutMenu() {
    await this.page.locator(this.logoutMenu).click();
  }
};
