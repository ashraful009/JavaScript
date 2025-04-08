//Arithmetic Operator
//+ - * / %  ++  --

var a = 10;
var b = 3;

console.log(a % b);

console.log(++a);
console.log(b++);
console.log(b);

console.log('                Assignment Operator');
// = += -= *= /= %= **=
var a = 10;
var b = 20;
var c = a + b;
console.log(c);
c += b;
console.log(c);
c -= 10;
console.log(c);
c *= 10;
console.log(c);
c /= 10;
console.log(c);
c %= 10;
console.log(c);


console.log('                  Comparison Operator');
// == === != !== > < >= <= ?:
var a = 10;
var b = 20;
console.log(a == b);
console.log(a === b); 
console.log(a != b);
console.log(a !== b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a ? b : a);
console.log(a ? a : b);
console.log(b ? a : b);
console.log(b ? b : a);

var c = "10";
console.log(a === c);
console.log("asd");