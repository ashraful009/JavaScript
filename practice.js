                                                    // ForEach function
console.log("ForEach function");
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    console.log(number * 2); // prints each number multiplied by 2
}
);

// ForEach function with index
console.log("ForEach function with index");
numbers.forEach((number, index) => {
    console.log(`Index: ${index}, Value: ${number}`); // prints index and value of each number
}
);
// ForEach function with thisArg
console.log("ForEach function with thisArg");
const obj = { multiplier: 2 };
numbers.forEach(function (number) {
    console.log(number * this.multiplier); // prints each number multiplied by 2 using thisArg
}, obj);







                                                              // Map function

console.log("Map function");
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // prints [2, 4, 6, 8, 10]


// Map function with index
console.log("Map function with index");
const indexedNumbers = numbers.map((number, index) => {
    return { index: index, value: number };
});
console.log(indexedNumbers); // prints [{ index: 0, value: 1 }, { index: 1, value: 2 }, ...]


// Map function with thisArg
console.log("Map function with thisArg");
const obj2 = { multiplier: 3 };
const tripledNumbers = numbers.map(function (number) {
    return number * this.multiplier; // prints each number multiplied by 3 using thisArg
}, obj2);
console.log(tripledNumbers); // prints [3, 6, 9, 12, 15]






                                                           // Filter function

console.log("Filter function");
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // prints [2, 4]


// Filter function with index
console.log("Filter function with index");
const indexedEvenNumbers = numbers.filter((number, index) => {
    return number % 2 === 0 && index % 2 === 0; // prints even numbers at even indices
});
console.log(indexedEvenNumbers); // prints [2]

// Filter function with thisArg
console.log("Filter function with thisArg");
const obj3 = { threshold: 2 };

const filteredNumbers = numbers.filter(function (number) {
    return number > this.threshold; // prints numbers greater than threshold using thisArg
}, obj3);
console.log(filteredNumbers); // prints [3, 4, 5]



                                                          // Reduce function

console.log("Reduce function");
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // prints 15

// Reduce function with initial value
console.log("Reduce function with initial value");
const product = numbers.reduce((accumulator, number) => accumulator * number, 1);
console.log(product); // prints 120

// Reduce function with index
console.log("Reduce function with index");
const indexedSum = numbers.reduce((accumulator, number, index) => {
    return accumulator + number + index; // prints sum of numbers and their indices
}, 0);
console.log(indexedSum); // prints 20

// Reduce function with thisArg
console.log("Reduce function with thisArg");
const obj4 = { multiplier: 2 };
const reducedSum = numbers.reduce(function (accumulator, number) {
    return accumulator + number * this.multiplier; // prints sum of numbers multiplied by multiplier using thisArg
}, 0, obj4);
console.log(reducedSum); // prints 30





                                                                   // Find function


console.log("Find function");
const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber); // prints 2

// Find function with index 

console.log("Find function with index");
const firstEvenNumberWithIndex = numbers.find((number, index) => {
    return number % 2 === 0 && index % 2 === 0; // prints first even number at even index
});
console.log(firstEvenNumberWithIndex); // prints 2



