// The spread operator can be used in an argument to a function or in a an array literal. You can use it to gain all the items in another array.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
