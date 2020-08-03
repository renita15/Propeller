import { Selector, t } from "testcafe";
//to execute this test run the following in command line to ignore javascript errors:testcafe chrome linkcount.js -e
fixture("Navigating through links in loop").page(
  "https://devexpress.github.io/testcafe/"
);

test("Click links in the navigation", async (t) => {
  const navItems = await Selector(".site-nav a");
  const navCount = await navItems.count; //get items count
  for (let i = 0; i < navCount; i++) {
    await t
      .click(navItems.nth(i)) //click each link
      .navigateTo("https://devexpress.github.io/testcafe/");
  }
  console.log("Number of links are " + navCount); //displaying the number of links
});
