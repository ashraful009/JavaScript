const promiseOne = new Promise(function (resolve, reject){
    //Do an async task
    //DB calls, Cryptography, Newwork

    setTimeout(() => {
        console.log('Async Task is complete');
        resolve()
    },1000)
}) 

promiseOne.then(() => {
    console.log('Promise consumed')
})

new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log('Async task 2');
        resolve()
    }, 1000)
})
.then(() => {
    console.log("Promise consumed 2");
    
})

const promiseThird = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async Task 3');
    resolve({UserName: "ashraful", Email: "zx@gmail.com"})
    },1000)
    
})

promiseThird.then((user) => {
    console.log(user);
    
})

const promiseFour = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({UserName: "ashraful", Pass: "123"})
        } else{
            reject('Error: Something went worng')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.UserName
    
}).then((username) => {
    console.log(username);
    
}).catch((error) => {
    console.log(error);
    
})



async function getUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log("Error:", error);
        
        
    }
}
getUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})