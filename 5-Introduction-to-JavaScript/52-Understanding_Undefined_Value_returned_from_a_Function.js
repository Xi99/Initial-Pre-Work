// Global variables can have their values changed within functions, but when that function is called without a return statement then it will come back undefined.
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();
