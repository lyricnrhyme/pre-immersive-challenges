module.exports = function insertDashes(num) {
  // write your code in here
  // console.log(num);
  var numStr = num.toString();
  // console.log(numStr);
  var splitNum = numStr.split("");
  // console.log(splitNum);

  for (var i=0; i<splitNum.length; i++) {
    if ((splitNum[i]%2) == 0 && (splitNum[i+1]%2) == 0) {
      splitNum.splice(i+1, 0, "-");  
      // console.log("dash");
    }
  }
  console.log(splitNum);
  var combinedNum = splitNum.join("");
  return combinedNum;
}