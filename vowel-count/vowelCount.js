module.exports = function vowelCount(str) {
  // write your code in here
  console.log(str);
  var splitStr = str.split("");
  // console.log(splitStr);
  var totalVowel = 0;
  for (var i=0; i<splitStr.length; i++) {
    if (splitStr[i].match(/[aeiouAEIOU]/)) {
      totalVowel += 1;
    } else {
      totalVowel += 0;
    }
  }
  console.log(totalVowel);
  return totalVowel;
}