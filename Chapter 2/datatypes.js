//Premitive Data TypeError//
// Number
// String
// Boolean
// Undefined
// Null
// Non-Premitive Data TypeError//
// Object
// Array
// Function
////////////////////////// Number /////////////////////////
var n = 1451
var f = 3.1416
var nn = Number(45)
var nnnn = Number("45")
console.log(n) 
console.log(f)
console.log(nn)
console.log(nnnn)
console.log(Number.parseFloat(nn))
console.log(Number.parseInt(nnnn))
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(1/0)
console.log('abd' * 2)


////////////////////////// String /////////////////////////
var str = "Hello World"
var str1 = 'Hello World'
var str2 = `Hello World`
var str3 = String("Hello World")
var str4 = String(123)
console.log(typeof str4)



////////////////////////// Boolean /////////////////////////
var bool = true
var bool1 = false
var bool2 = Boolean(true)
var bool3 = Boolean(false)
var bool4 = Boolean(0)
var bool5 = Boolean(1)
console.log(bool4)




////////////////////////// Null / Undefined /////////////////////////
var nll = null
var Undefined
console.log(nll)
console.log(Undefined)

console.log('Hexa Decimal')

var Hex = 0xFF
var Octal = 0o10
var Binary = 0b1010
var BigInt = 1234567890123456789012345678901234567890n
console.log(Hex)    
console.log(Octal)
console.log(Binary)
console.log(BigInt)
console.log(typeof BigInt)

console.log(typeof Hex)
console.log(typeof Octal)
console.log(typeof Binary)
console.log(typeof BigInt)
