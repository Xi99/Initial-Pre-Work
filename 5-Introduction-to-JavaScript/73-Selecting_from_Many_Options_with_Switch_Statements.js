// You can use a switch statement as another form of the if / else if where in each case if the met, then return the value and break out of the function. The order is also important
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      return "alpha";
      break;
    case 2:
      return "beta";
      break;
    case 3:
      return "gamma";
      break;
    case 4:
      return "delta";
      break;

  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
