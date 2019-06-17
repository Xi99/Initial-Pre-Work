// The let keyword is used in ES6 so that a variable can only be declared once so that it doesn't get overriden
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
