var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr[0])
console.log(arr)


console.log(arr.length)
console.log(arr[20])


/// array traversing

for(var i = 0; i < arr.length; i++){
console.log(arr[i])
}


for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i] + 1
    console.log(arr[i])
    }

    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }    
    console.log(sum)

    