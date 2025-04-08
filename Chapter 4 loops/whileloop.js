
var i = 0
while(i < 10){
    console.log("Hello World")
    i++
}

// while loop with condition
var i = 0  
while(i < 10){
    if(i % 2 == 0){
        console.log("Hello World")
    }
    i++
}

// while loop with condition and break
var i = 0
while(i < 10){
    if(i % 2 == 0){
        console.log("Hello World")
    }
    else{
        break
    }
    i++
}
// while loop with condition and continue
var i = 0
while(i < 10){
    if(i % 2 == 0){
        console.log("Hello World")
    }
    else{
        continue
    }
    i++
}

// while loop with condition and break and continue
var i = 0   
while(i < 10){
    if(i % 2 == 0){
        console.log("Hello World")
    }
    else{
        continue
    }
    break
    i++
}

var isRunning = true;

while(isRunning){
    var rand = Math.floor(Math.random() * 10) + 1;
    if(rand == 9){
        console.log("Random number is 9, exiting loop.");
        isRunning = false;
    }
    else{
        console.log("Random number is " + rand);
    }
}