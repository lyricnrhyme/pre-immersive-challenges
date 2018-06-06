module.exports = function cookieProblem(array) {
  // write your code in here
  console.log(array);
  var bigNum = array[0]
  for (var i=1; i < array.length; i++) {
    if (array[i] > bigNum) {
      bigNum = array[i];
    };
  }
  console.log(bigNum);
}