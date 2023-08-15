const { test, expect } = require("@playwright/test");

//! Web Table logic

test("Select checkbox for the product", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Capture the table
  const table = await page.locator("#productTable");

  // Capture all the colums and rows of the table
  const columns = await table.locator("thead tr th");
  console.log("No of columns", await columns.count());

  const rows = await table.locator("tbody tr");
  console.log("No of rows", await rows.count());

  //!   Scenario 1 Select checkbox for the product 4
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Product 4",
  });

  await matchedRow.locator("input").check();

  //! Scenario 2 Select checkbox for mulitple products using Re-usable function

  await selectProduct(rows, page, "	Product 1");
  await selectProduct(rows, page, "	Product 3");
  await selectProduct(rows, page, "	Product 5");
});

//! function created for selection of multiple products
async function selectProduct(rows, page, name) {
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });

  await matchedRow.locator("input").check();
}
