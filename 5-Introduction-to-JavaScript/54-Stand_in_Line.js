// In the queue, items are kept in order where new items are added to the back and old items are taken off the front.
function nextInLine(arr, item) {
  // Your code here
  arr.push(item)
  var removed = arr.shift()
  return removed;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
