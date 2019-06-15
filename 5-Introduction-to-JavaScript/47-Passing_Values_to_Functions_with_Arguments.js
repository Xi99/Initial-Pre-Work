// A function typically has parameters, and these are essentially placeholders for values that will be passed when the function is called. Those values that are called with the function are called parameters. You can then use the value of the parameters within the function for it to output a value.
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}

functionWithArgs(10, 12);
