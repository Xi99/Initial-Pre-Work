// ES6 allows simple fields with object literals so that you don't have to write x: x and instead just have to write x and ES6 will make it work under the hood.
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return ({ name, age, gender });
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
