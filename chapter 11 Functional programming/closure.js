/// Basic Closure

//first look closure
let b = 10;
function a(){
    console.log(a)
}

function c(){
    let x = 6;
    return function (){
        console.log(x)
    }
    
}
let abc = c()
console.dir(abc)