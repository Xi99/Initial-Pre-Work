// You can "lookup" values in an object as an easier process. Using objects as opposed to switch and if/else if statements is best when you know that your input data is limited.
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  }

result = lookup[val]
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
