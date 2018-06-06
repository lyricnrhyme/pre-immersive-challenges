module.exports = function findTheStrayValue(array) {
  // write your code in here
  console.log(array);
  var diffWord = ""
  for (var i=0; i<array.length; i++) {
    // console.log(array[i]);
    if (array[i] !== array[i+1] && array[i] !== array[i-1]) {
      diffWord = array[i];
    }
  }
  console.log(diffWord);
  return diffWord;
}