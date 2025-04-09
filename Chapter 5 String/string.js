var str = "Hello World";
var str2 = 10;
var str3 = 10 + ''
var str4 = String(10)
var str5 = 10+toString()


//// Escape Notation
var str6 = "This is string"
console.log(str6)
console.log("Hellow 'World")



/// String Comperison
var a = 'abc'
var b = 'bcd'
console.log(a > b) // false
console.log(a < b) // true
console.log(a == b) // false

console.log('001' == 1) // true  // convert string to number

//String MEthods

var x = 'I am'
var y = 'a student'

var z = x.concat(y) // Concatenation
var h = x.concat(' ', y) // Concatenation with space
var m = h.substring(0, 4) // Substring
console.log(h.charAt(0)) // First character

console.log(h.startsWith('I am'))
console.log(h.endsWith('student'))

console.log('hsdf'.toUpperCase())
console.log('hsdf'.toLowerCase())
console.log('         hsdf        '.trim()) // Remove spaces from both sides

//string Length

var length = 0;
while(true){
    if(h.charAt(length) == ''){
        break;
    }
    else length++;
}

console.log(length)
console.log(h.length) // 15