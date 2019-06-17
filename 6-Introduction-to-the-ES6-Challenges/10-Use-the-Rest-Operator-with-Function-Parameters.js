// The rest operator in functions allows you to use a variable number of arguments. These are then stored in the array and can still be accessed later inside the function.
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
