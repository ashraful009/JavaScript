var arr = [4, 6, 3, 7, 8, 9]

var find = 10;
var isFound = false;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] == find){
        console.log("Data found at " + i)
        isFound = true;
        break;
    }
} 
    if(!isFound) console.log("Not Found")