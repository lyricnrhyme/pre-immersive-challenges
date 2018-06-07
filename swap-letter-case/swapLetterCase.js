module.exports = function swapLetterCase(str) {
  // write your code in here
  console.log(str);
  var splitStr = str.split("");
  console.log(splitStr);
  for (var i=0; i<splitStr.length; i++) {
    if (splitStr[i] == splitStr[i].toLowerCase()) {
      splitStr[i] = splitStr[i].toUpperCase();
    } else {
      splitStr[i] = splitStr[i].toLowerCase();
    }
  }
  console.log(splitStr);
  var swap = splitStr.join("");
  return swap;
}