const user={
    username:"Anirban",
    price:900,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to my website`);
    }
}
user.welcomeMessage()
user.username="Moni"
user.welcomeMessage()
const addTwo=(num1,num2)=>{
    return num1 + num2
}
console.log(addTwo(3,6))
const addtwo=(num1,num2)=> num1 + num2
console.log(addTwo(3,9))