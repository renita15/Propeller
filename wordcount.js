import { Selector, t } from "testcafe";

fixture("Counting word on page").page("https://news.ycombinator.com/");

var str = "this    is    a test.  to see  what.  so lets  see.";

test("Count word on the page", async (t) => {
  await t;

  function WordCount(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi, "");
    str = str.replace(/[ ]{2,}/gi, " ");
    str = str.replace(/\n /, "\n");
    return str.split(" ").length;
  }

  console.log(WordCount(str));
});
