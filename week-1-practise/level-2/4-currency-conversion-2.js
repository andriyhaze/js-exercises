/*
  CURRENCY FORMATTING
  ===================
  The business is now breaking into the Brazilian market
  Write a new function for converting to the Brazilian real (actually the exchange rate is 7,17)
  They have also decided that they should add a 1% fee to all foreign transactions
  Find a way to add 1% to all currency conversions (think about the DRY principle)
*/

function convertToUSD(price) {
  var USDprice = price * 1.4;
  var USDpercent = USDprice * 0.1;
  return USDprice + USDpercent;
}
function convertToBRL(price) {
  var BRLprice = price * 7.17;
  var BRLpercent = BRLprice * 0.1;
  return BRLprice + BRLpercent;
}

/* DO NOT EDIT BELOW THIS LINE */
/* --------------------------- */

var product = "The life and times of Mozafar Haider";
var price = 12.5;
var priceInUSD = convertToUSD(price);
var priceInBRL = convertToBRL(price);

console.log("Product: " + product);
console.log("Price in USD: " + priceInUSD);
console.log("Price in BRL: " + priceInBRL);
