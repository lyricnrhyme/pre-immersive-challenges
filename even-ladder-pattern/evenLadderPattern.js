module.exports = function evenLadderPattern(num) {
  // write your code in here
  console.log(num);
  if (num <=1) {
    return "";
  } else {
    // console.log(typeof num);
    for (var i=2; i<=num; i++){
      // console.log("num");
      if ((i%2)==0) {
        console.log(i);
      }
    }
  }
}