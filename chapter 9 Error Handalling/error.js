try{
    console.log("try block start");
    console.log(x); // ReferenceError: x is not defined
    console.log("try block end");
} 
catch(e){
    // define what i have to do with erorr
    // retry logic
    // feedback
    // log the error
    // custom error handling
    console.log("inside catch block");
    console.log("error message: ", e);
    throw new Error("inside finally block"); // throw new Error("inside catch block"); // this will stop the execution of the program
}
 
finally{
    // this block will always execute
    console.log("inside finally block");
    console.log("finally block end");
    // cleanup code 
    // close connection
    // close file
    // close db connection
    // close network connection
    // close file descriptor
    // close file handle
    // close file stream
    // close file pointer
    // close file stream
    
}  