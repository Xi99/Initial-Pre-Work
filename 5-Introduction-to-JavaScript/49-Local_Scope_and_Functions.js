// Variables declared with var in front of them within a function are local variables and the scope of them doesn't go outside the function it is in.
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Where will I end up";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
