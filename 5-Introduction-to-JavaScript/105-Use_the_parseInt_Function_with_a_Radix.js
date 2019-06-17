// You can add a second argument to the parseInt() called the radix. It says if the input is in the binary system and returns what number that will be in normal numbers.
function convertToInteger(str) {
  var a = parseInt(str, 2);
  return a
}

convertToInteger("10011");
