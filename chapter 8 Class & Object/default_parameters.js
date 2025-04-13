function sayName(myName = "John Doe") {
    console.log("Hello " + myName);
}

sayName("Ashraful")
sayName();




function sayName(fname = "IronMan", lname = fname) {
    console.log("Hello " + fname + " " + lname);
}

sayName("Ashraful", "Islam")
sayName("Ashraful")
sayName();




function solve (value = {ht:50, wt:60}){
    console.log(value)
}
solve({ht: 100, wt: 200})
solve()



function solve (value = 'RAhul'){
    console.log(value)
}
solve(null)
solve(undefined)


function getage(){
    return 25;
}

function utility(name = "Ashraful", age = getage()){
    console.log(name," ",age)
}

utility("Rahul", 40)
utility("Rahul")
utility()