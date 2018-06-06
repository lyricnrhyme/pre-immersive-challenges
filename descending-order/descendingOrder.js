module.exports = function descendingOrder(number) {
  // write code in here
  // console.log(typeof number);

  if (typeof number === "string") {
    // console.log("not a number!");
    var notNumber = "not a number!";
    return notNumber;
  }
  var digits = number.toString().split("");
  // console.log(digits);
  var digitsSort = digits.sort();
  // console.log(digitsSort);

  var descending = []

  for (var i=digits.length-1; i >= 0; i--) {
    descending.push(digitsSort[i]);
  }
  // console.log(descending);
  var newNum = descending.join("");
  return newNum;
}