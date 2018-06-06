module.exports = function findMiddleValue(numArray) {
  // write your code in here
  console.log(numArray);
  var bigNum = numArray[0];
  var smallNum = numArray[0];
  var middleValue = numArray[0]
  for (var i=0; i < numArray.length; i++) {
    if (numArray[i] > bigNum) {
      bigNum = numArray[i];
    } else if (numArray[i] < smallNum) {
      smallNum = numArray[i];
    }
  };
  for (var i=0; i<numArray.length; i++) {
    if (numArray[i] < bigNum && numArray[i] > smallNum) {
      middleValue = i
    }
  }
  console.log(bigNum);
  console.log(smallNum);
  console.log(middleValue);
  return middleValue;
}