/* waht is functional programming
Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.
It is a declarative programming style, meaning that it focuses on what to solve rather than how to solve it. Functional programming languages include Haskell, Lisp, and Scala, among others.

Three main principles of functional programming are:
1.pure functions
2.first-class functions
3.higher-order functions



////////////       [Pure functions]        /////////////

Pure functions are functions that always produce the same output for the same input and do not have any side effects.
This means that they do not modify any external state or variables, and they do not depend on any external state or variables.
Pure functions are easier to reason about, test, and debug because they are predictable and do not have any hidden dependencies.*/

function sqrt(x) {
    return x * x;
}
console.log(sqrt(2)); // 4
console.log(sqrt(2)); // 4
console.log(sqrt(2)); // 4


/////////////       [First-class functions]        /////////////

//Function can be store in veriable
function add(a, b) {
    return a + b;
}
let sum = add
console.log(sum(2, 3));

//Function can be store in array

let arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](2, 3)); 

//Function can be store in object
let obj = {
    addd: add
}
console.log(obj.addd(8, 3));





////////       [Higher-order functions]        /////////////

//Higher-order functions are functions that take other functions as arguments or return functions as their result.


console.log("Higher order function")

function add(a, b) {
    return a + b;
}

function manipulate(a, b, funn){
    var c = a + b;
    var d = a - b;

    function multiply() {
        var m = funn(a, b)
        return c * d * m;
    }
    return multiply;
}

let result = manipulate(2, 3, add);
console.log(result());

