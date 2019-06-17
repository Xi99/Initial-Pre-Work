// varialbles declared with const are mutable in that the indices can be changed but the whole variable can't be changed to a whole new reassignment
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
