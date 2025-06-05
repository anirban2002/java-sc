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
function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(2,3,4,5))
const user={
    username:"Anirban",
    price:300
}
function handleobject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
const MyNewArray=[23,56,78,35]
function retursecoundvalu(getarray){
    return getarray[1]
}
console.log(retursecoundvalu(MyNewArray))