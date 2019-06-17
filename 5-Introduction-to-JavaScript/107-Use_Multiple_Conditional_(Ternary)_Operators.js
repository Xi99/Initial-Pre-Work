// You can do multiple conditional operators on one line so you don't have to do many if/else statements on multiple lines.
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);
