const { test, expect } = require("@playwright/test");

//! pagination Table logic

test("Select checkbox for the product", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Capture the table
  const table = await page.locator("#productTable");

  // Capture all the colums and rows of the table
  const columns = await table.locator("thead tr th");

  const rows = await table.locator("tbody tr");

  //! Read all the data from the particular page

  //   for (let i = 0; i < (await rows.count()); i++) {
  //     // capture tr
  //     const row = rows.nth(i);

  //     //capture all td's
  //     const tds = row.locator("td");

  //     for (let j = 0; j < (await tds.count()) - 1; j++) {
  //       console.log(await tds.nth(j).textContent());
  //     }
  //   }

  //! Read data from all the pages in the table

  // get the pagination links
  const pages = await page.locator("#pagination li a");

  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < (await rows.count()); i++) {
      // capture tr
      const row = rows.nth(i);

      //capture all td's
      const tds = row.locator("td");

      for (let j = 0; j < (await tds.count()) - 1; j++) {
        console.log(await tds.nth(j).textContent());
      }
    }
  }
});
