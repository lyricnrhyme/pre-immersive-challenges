module.exports = function doubleStrChars(str) {
  // write your code in here
  console.log(str);
  if (typeof str === "string") {
    // console.log("i'm a string!");
    var splitStr = str.split("");
    console.log(splitStr);
    var doubleStr = [];
    for (var i=0; i < splitStr.length; i++) {
      doubleStr.push(splitStr[i]);
      doubleStr.push(splitStr[i]);
    }
    // console.log(doubleStr);
    var newStr = doubleStr.join("");
    return newStr
  } else {
    var notStr = "not a string!";
    return notStr;
  };
}