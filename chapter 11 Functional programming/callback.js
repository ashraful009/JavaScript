function sample(a, b, callBack){
    let c = a + b
    let d = a - b
    let result = callBack(c, d)
        return result
    
}

function sum (a, b){
    return a + b
}

let result = sample(5, 8, sum)
console.log(result)

let result2 = sample(5, 8, function(x, y){
    return x - y;
})
console.log(result2)
