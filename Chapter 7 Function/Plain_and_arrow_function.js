/// function

function add(a, b) {
    return a + b;
}

console.log("Add = " +add(2, 3));

let mult = function (a, b) {
    return a * b;
}

console.log("Mult = " + mult(2, 3));

function fn(){
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

fn();



// Arrow function
let add1 = (a, b) => a + b;
console.log("Add1 = " + add1(2, 3));

let mult1 = (a, b) => a * b;
console.log("Mult1 = " + mult1(2, 3));

let mult2 = (a, b) => {
    return a * b;
}
console.log("Mult2 = " + mult2(2, 3));


let dosum = (a, b) => {
    a = a + b;
    b = a + b;
    a = a * b;
    return a + b;
}

console.log("Dosum = " + dosum(2, 3));