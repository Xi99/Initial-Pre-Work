// You can check if an object has an existing property in it if you are not sure by using the .hasOwnProperty(propname). If it does you can then go further to find out the value of that property.
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
   if (myObj.hasOwnProperty(checkProp) == true) {
    return myObj[checkProp];
  }
  else {
      return "Not Found"
  }
}

// Test your code by modifying these values
checkObj("gift");
