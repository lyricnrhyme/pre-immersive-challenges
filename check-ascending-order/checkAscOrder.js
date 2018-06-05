module.exports = function checkAscOrder(numArray) {
  // write your code in here
for (var i=1; i < numArray.length; i++) {
  if (numArray[i] > numArray[i-1]) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
}
}