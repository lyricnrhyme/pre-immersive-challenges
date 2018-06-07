module.exports = function reverseMessage(str) {
  // write your code in here
  // console.log(str);
  var lowerCase = str.toLowerCase();
  // console.log(lowerCase);
  var strArr = lowerCase.split(" ");
  // console.log(strArr);
  var newStr = [];
  for (var i=strArr.length-1; i>=0; i--) {
    var character = strArr[i].split("");
    // console.log(character);
    var newWord = [];
    for (var j=strArr[i].length-1; j>=0; j--) {
      newWord.push(strArr[i][j]);
      // console.log(newWord); 
    }
    // console.log(newWord);
    newWord[0] = newWord[0].toUpperCase();
    console.log(newWord);
    var reversedWord = newWord.join("");
    // console.log(reversedWord);
    newStr.push(reversedWord);
  }
  console.log(newStr);
  var reversedStr = newStr.join(" ");
  console.log(reversedStr);
  return reversedStr;
}