// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg.
function logMsg() {
    console.log(`Error Message: ${this.errMsg}`);
}

const ex1 = {
    errMsg: 'Error in Obj1'
}

const ex2 = {
    errMsg: 'Error in Obj2'
}

logMsg.call(ex1);
logMsg.call(ex2);