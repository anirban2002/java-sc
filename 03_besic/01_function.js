function addTwoNumber(number1,number2){
   let result=number1+number2
    return result
}
const result=addTwoNumber(3,6)
console.log("Result",result);

function loginuserMessage(username){
    if(username==undefined){
        colsole.log("plz enter Username")
    }
    return `${username}just logged in`
}
console.log(loginuserMessage("Anirban"))
