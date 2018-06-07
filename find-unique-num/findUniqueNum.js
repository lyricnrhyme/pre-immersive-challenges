module.exports = function findUniqueNum(strOfNums) {
  // write your code in here
  console.log(strOfNums);
  console.log(typeof strOfNums);
  var numArr = strOfNums.split(" ");
  console.log(numArr);
  var uniqueNum = 0
  // var numCheck = [];
  // for (var i=0; i<numArr.length; i++) {
  //   if ((numArr[i]%2) == 0) {
  //     numCheck.push("even");
  //   } else {
  //     numCheck.push("odd");
  //   }
  // }
  // console.log(numCheck);
  for (var i=0; i<numArr.length; i++) {
    if ((numArr[i]%2) != (numArr[i+1]%2) && (numArr[i]%2) != (numArr[i-1]%2)) {
      uniqueNum = i;
    }
  }
  console.log(uniqueNum);
  return uniqueNum;
}