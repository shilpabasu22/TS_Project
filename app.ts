let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Test";
if(typeof userInput === 'string'){
userName = userInput;
}

//never return type - error (throw) and infinte loop
function generateError(message:string, code:number):never{
    throw { errorMessage: message, errorCode: code};
}

generateError('An error occured!!!', 500);