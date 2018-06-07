module.exports = function needleInHaystack(haystack) {
  // write code in here
  console.log(haystack);
  if (haystack.includes("needle")) {
    for (var i=0; i<haystack.length; i++) {
        if (haystack[i] == "needle") {
          var foundNeedle = i;
          return foundNeedle;
        }
    }
  } else {
    return false;
    } 
  console.log(haystack.includes("needle"))
}