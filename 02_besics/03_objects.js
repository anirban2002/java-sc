//object literals
const mySym=Symbol("key1")
const JsUser={
    name:"Anirban",
    age:"23",
    [mySym]:"mykey1",
    locatuion:"Benglore",
    email:"pupunparya2002@gmail.com"
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
//changes email
JsUser.email="anieban05@gmail.com"
//console.log(JsUser)
//function
JsUser.greeting=function(){
    console.log("Hello Js user")
}
JsUser.greetingtwo=function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



