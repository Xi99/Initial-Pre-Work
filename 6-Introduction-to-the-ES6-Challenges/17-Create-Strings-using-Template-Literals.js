// Template Literals allow you to use string interpolation features to take values from an object and insert them into a multi-line string. You have a placeholder that will fill in with the desired value instead of having to concatenate or use /n to make a new line. You can use the .map() function to create the new array with every element called.
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
 const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
