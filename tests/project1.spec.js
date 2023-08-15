const { test, expect } = require("@playwright/test");
import { HomePage } from "../Page-Objects/HomePage";
import { LoginPage } from "../Page-Objects/LoginPage";

let page;
test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  let login = new LoginPage(page);
  await login.navigateToLoginPage();
  await login.loginMenu();
  await login.loginDetails("test", "test");
  await login.submitButtonClick();
  page.waitForTimeout(3000);
});

test.afterEach(async () => {
  let logout = new HomePage(page);
  await logout.loginOutMenu();
});

test("Home Page", async () => {
  let products = await page.$$(".hrefch");
  expect(products).toHaveLength(10);
});
