module.exports = function moveTheZeros(arrNum, isRight) {
  // write your code here
  console.log(arrNum, isRight);
  var notZeros = [];
  var zeros = [];
  for (var i=0; i<arrNum.length; i++) {
    if (arrNum[i] != 0) {
      notZeros.push(arrNum[i]);
    } else if (arrNum[i] == 0) {
      zeros.push(0);
    }
  }
    
  if (isRight == true) {
    // console.log("move right");
    for (var i=0; i<zeros.length; i++) {
      notZeros.push(zeros[i]);
    }
  } else {
    for (var i=0; i<notZeros.length; i++) {
      zeros.push(notZeros[i]);
    }
    // console.log("move left");
  }

  // console.log(notZeros);
  // console.log(zeros);
}