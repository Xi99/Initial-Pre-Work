// The order of your if and else if statements matters. JS reads it from top to bottom and as soon as one of the statements is met, that one will return and the other options won't have a chance to run.
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
