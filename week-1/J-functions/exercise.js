var x = (y = z = 100);

function halve(number) {
  return number / 2;
}

function double(number) {
  return number * 2;
}

function add(number) {
  return number + 7;
}

var rx = halve(x);
var ry = double(y);
var rz = add(z);

console.log(rx);
console.log(ry);
console.log(rz);
