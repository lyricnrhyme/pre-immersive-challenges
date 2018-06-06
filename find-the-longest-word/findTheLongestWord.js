module.exports = function findTheLongestWord(sen) {
  // write your code in here
  console.log(sen);
  var longestWord = ""
  for (var i=0; i<sen.length; i++) {
    // console.log(sen[i]);
    if (sen[i].length > longestWord.length) {
      longestWord = sen[i];
    }
  }
  // console.log(longestWord);
  return longestWord;
}