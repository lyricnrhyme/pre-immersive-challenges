
module.exports = function acceptableSequence(str) {
  // write your code here
  var splitUp = str.split("");
  // console.log(splitUp);
  var newStr = [];
 for (var i=0; i < splitUp.length; i++) {
  if (splitUp[i] == "+") {
    newStr.push("Yay");
    //  console.log("Yay");
   } else if (splitUp[i] == "=") {
    newStr.push("Nay");
    //  console.log("Nay");
   } else {
    newStr.push("Letter");
    //  console.log("Letter");
   };

   };
  //  console.log(newStr);
   for (var i=0; i < newStr.length; i++) {
     if (newStr[i] == "Letter") {
       if (newStr[i-1] == "Yay" && newStr[i+1] == "Yay") {
         return true;
       } else {
         return false;
       };
     };
    };
  };
