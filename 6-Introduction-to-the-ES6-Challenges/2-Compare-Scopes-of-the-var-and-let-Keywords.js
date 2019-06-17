// There are differences between var and let keywords in the scope they are definced. The let keyword's scope is limited to the block, statement, or expression that it is declared.
function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
