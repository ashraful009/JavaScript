let src = {
    age: 25,
    wt: 50,
    ht: 180,
};

let dest = {...src}; // Shallow copy using spread operator
let dest2 = Object.assign({}, src);


dest.age = 30;

console.log(src)
console.log(dest)