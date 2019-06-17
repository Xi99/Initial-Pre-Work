// destructuring arrays is similar to destructuring objects. One key difference from the spread operator is that you can choose which elements you want to assign to variables.
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a, b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
