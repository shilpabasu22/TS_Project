"use strict";
var userInput;
var userName;
userInput = 5;
userInput = "Test";
if (typeof userInput === 'string') {
    userName = userInput;
}
//never return type - error (throw) and infinte loop
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
generateError('An error occured!!!', 500);
