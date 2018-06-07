module.exports = function howManyLitres(hours) {
  // write your code in here
  // console.log(hours);
  var litres = 0;
  for (var i=0; i<hours; i++) {
    litres += 0.5;
  }
  // console.log(litres);
  var estLitres = Math.floor(litres);
  console.log(estLitres);
  return estLitres;
}