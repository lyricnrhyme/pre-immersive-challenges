module.exports = function evenLadderPattern(num) {
  // write your code in here
  // console.log(num);
  if (num <=1) {
    return "";
  } else {
    // console.log(typeof num);
    var evenLadder = [];
    for (var i=2; i<=num; i++){
      // console.log("num");
      if ((i%2)==0) {
        // console.log(i);
        for (var j=0; j<i; j++){
          // console.log(i);
          evenLadder.push(i);
        }
        evenLadder.push("\n");
      }
    }
    // console.log(evenLadder);
    evenLadder.pop();
    // console.log(evenLadder);
    var newStr = evenLadder.join("");
    console.log(newStr);
    return newStr
  }
}