var a  = 20;
var b = 20;

if(a > b){
    console.log("A is getter then B");
}
else if (a < b){
    console.log("B is getter then A");  
}
else {
    console.log("A and B are equal");  
}


if(a % 2 == 0){
    console.log("A is even number");
}
else if(a % 2 != 0){    
    console.log("A is odd number");
}
else if(a == 0){
    console.log("A is zero");
}
else {
    console.log("A is not zero");
}

if(b % 2 == 0){
    console.log("B is even number");
}
else if(b % 2 != 0){    
    console.log("B is odd number");
}
else if(b == 0){
    console.log("B is zero");
}
else {
    console.log("B is not zero");
}

var date = new Date();

var day = date.getDay();

if(day == 0){
    console.log("Today is Sunday");
}
else if(day == 1){
    console.log("Today is Monday");
}
else if(day == 2){
    console.log("Today is Tuesday");
}
else if(day == 3){
    console.log("Today is Wednesday");
}
else if(day == 4){
    console.log("Today is Thursday");
}
else if(day == 5){
    console.log("Today is Friday");
}
else if(day == 6){
    console.log("Today is Saturday");
}
else {
    console.log("Invalid day");
}