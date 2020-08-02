
#index.js code
#In order to execute the test run 'testcafe chrome index.js' from the Visual Studio Code command prompt
#Ensure that the chrome browser UI is open to see the test run
#--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import { Selector, t } from "testcafe";

fixture`Getting Started`.page // declare the fixture
`https:///www.propelleraero.com/`; // specify the start page

test("Test", async (t) => {
  await t
    //maximise the brower window
    .maximizeWindow()

    //click on the Blog link
    .click("#menu-item-38")
    .click("[data-filter='.aeropoints']")
    .click("[data-filter='all']");

  var blogCount = await Selector(".posts-wrap .post-bg").count;

  //counts and displays the total number of blogs on the site
  console.log("Total number of blogCount/s are " + blogCount);

  var maxCount = 0;
  var title = "";

  for (var i = 0; i < blogCount; i++) {
    var blog = Selector(".posts-wrap .post-bg").nth(i);

    await t.click(blog);
    var wordsInBlog = wordCount(await Selector(".entry-content").textContent);
    console.log(wordsInBlog);

    var blogTitle = await Selector(".entry-title").textContent;
    console.log(blogTitle);

    if (wordsInBlog > maxCount) {
      maxCount = wordsInBlog;
      title = blogTitle;
    }

    await t
      //return to the Blog page https://www.propelleraero.com/blog/ afer accessing a blog as the blogs needs to be reloaded
      .click("#menu-item-38")
      .click("[data-filter='.aeropoints']")
      .click("[data-filter='all']");
  }

  console.log("Blog with highest number of words: " + maxCount);
  console.log("Blog Title with highest number of words: " + title);
});

function wordCount(words) {
  return words.split(" ").length;
}

