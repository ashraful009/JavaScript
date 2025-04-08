/// & ///
// true && true = true
// true && false = false
// false && true = false
// false && false = false
// true || true = true


//// | ///
// true || true = true
// true || false = true
// false || true = true
// false || false = false

var a = 60
var b = 20
var c = 30
var d = 40

if(a > b && c > d) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}

if(a > b || c > d) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}

if(!(a > b)) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}

if(!(a < b)) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}

if(!(a == b)) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}

if(!(a != b)) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}

if(!(a >= b)) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}

if(!(a <= b)) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}

if(!(a === b)) {
    console.log("Condition is true")
}
else {
    console.log("Condition is false")
}