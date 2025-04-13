console.log(age)

var age = 50;

console.log(num)

let num = 50;

let greet = function () { // function expression
    console.log('Greeting')
}

function greetme (greet, fulname){ // function declaration
    console.log('hellow', fulname);
    greet()
}

greetme(greet, 'hukka')


const arr = [
    function (a, b){
        return a + b;
    },
    function(a, b){
        return a - b;
    },
    function(a, b){
        return a * b;
    },

];
for (let i in arr){
    console.log(arr[i](5,10));
}


let obj = {
    age : 25,
    wet : 3456,
    ht : 234,
    greet:()=> {
        console.log("hello")
    }

}

console.log(obj.age);
obj.greet();