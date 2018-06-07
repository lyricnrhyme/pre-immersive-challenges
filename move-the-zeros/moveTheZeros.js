module.exports = function moveTheZeros(arrNum, isRight) {
  // write your code here
  console.log(arrNum, isRight);
  var zeros = [];
  for (var i=0; i<arrNum.length; i++) {
    if (arrNum[i] == 0) {
      zeros.push(0);
    }
    if (isRight == true) {
      // console.log("move right");
    } else {
      // console.log("move left");
    }
  }
  console.log(zeros);
  console.log(arrNum);
}