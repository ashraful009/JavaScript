// ES6 Fat Arrow Functions

function number(){
    return 10;
}
console.log(number()); 

let number2 = () => {
    return 10;
}  // if function have only one instruction and return type we can simplyfy it.


let number3 = () => 10; // fat arrow function
console.log(number3());






// if function have parameters
function number4 (n){
    return n;
}
console.log(number4(10));

let number5 = (n) => 10; // let number5 = n => 10;
console.log(number5(10)); // fat arrow function



var javascript = {
    name: 'JavaScript',
    libraries: ['React', 'Angular', 'Vue'],
    printfunction: function(){
        this.libraries.forEach((a) => console.log(this.name + ' loves ' + a));
    }

}
javascript.printfunction();