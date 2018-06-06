module.exports = function countByMultiples(length, x) {
  // write your code in here
  // console.log(length);
  // console.log(x);
  var multArray = [];
  for (var i=1; i <= length; i++) {
    // console.log(x*i);
    multArray.push(x*i);
  }
  return multArray
}