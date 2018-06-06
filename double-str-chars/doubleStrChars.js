module.exports = function doubleStrChars(str) {
  // write your code in here
  console.log(str);
  if (typeof str === "string") {
    // console.log("i'm a string!");
    var splitStr = str.split("");
    console.log(splitStr);
    for (var i=0; i < splitStr.length; i++) {
      
    }
  } else {
    var notStr = "not a string!";
    return notStr;
  };
}