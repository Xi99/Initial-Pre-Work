// The strict equality operator "===" differes from the equality operator in that it doesn't perform the type conversion so the two values have to be the same data type to be considered true.
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(7);
