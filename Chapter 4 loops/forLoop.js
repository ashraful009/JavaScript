// for Loop

for(i = 0; i < 100; i++){
    console.log(i + 1 + " Js");
}

// for Loop with condition
for(i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(i + 1 + " Js");
    }
}
// for Loop with condition and break
for(i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(i + 1 + " Js");
    }
    else{
        break;
    }
}
// for Loop with condition and continue
for(i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(i + 1 + " Js");
    }
    else{
        continue;
    }
}
// for Loop with condition and break and continue
for(i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(i + 1 + " Js");
    }
    else{
        continue;
    }
    break;
}
// for Loop with condition and break and continue and label
for(i = 0; i < 100; i++){
    if(i % 2 == 0){
        console.log(i + 1 + " Js");
    }
    else{
        continue;
    }
    break;
}
// for Loop with condition and break and continue and label and nested loop     
for(i = 0; i < 100; i++){
    for(j = 0; j < 100; j++){
        if(i % 2 == 0){
            console.log(i + 1 + " Js");
        }
        else{
            continue;
        }
        break;
    }
}
// for Loop with condition and break and continue and label and nested loop and label
for(i = 0; i < 100; i++){
    for(j = 0; j < 100; j++){
        if(i % 2 == 0){
            console.log(i + 1 + " Js");
        }
        else{
            continue;
        }
        break;
    }
}