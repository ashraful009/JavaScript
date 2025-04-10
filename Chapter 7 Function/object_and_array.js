let obj = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(obj);

let obj1 = {
    name: "John",
    age: 30,
    city: "New York",
    getName: function () {
        return this.name;
    },
    getAge: function () {
        return this.age;
    },
    getCity: function () {
        return this.city;
    }
}
console.log(obj1.getName());
console.log(obj1.getAge());



 let arr = new Array('Ashraful', 'Islam', true, 4, 5, '4', '8', 8);

arr.push(6);
console.log(arr);

arr.pop()
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift(1)
console.log(arr);

arr.splice(2, 1)
console.log(arr);

arr.splice(2, 0, 3)
console.log(arr);

arr.slice(2, 4)
console.log(arr);

arr.map((item, index) => {
    console.log(item, index);
})
arr.forEach((item, index) => {
    console.log(item, index);
})

arr.filter((number) => {
    if(typeof(number)=== 'string')console.log(number);
})

arr.reduce((acc, current) => {
    console.log(acc + '' + current);
}, 0)


let obj2 = {
    name: "John",
    age: 30,
    city: "New York"
}

for(let key in obj2){
    console.log(key, obj2[key]);
}


/// Array of functions
let arr1 = [12, 453,5, 23, 45, 67, 89, 90, 100];
function getsum(arr1){
    let sum = 0;
    arr1.forEach((item) => {
        sum += item;
    })
    return sum;
}

console.log("Sum = " + getsum(arr1));

