const tinderUser={}
tinderUser.id="WI04852"
tinderUser.name="Anirban"
tinderUser.isLoggedIn=false
console.log(tinderUser);
const regularUser ={
    email:"aniparya05@gmail.com",
    fullname:{
        Userfullname:{
            firstname:"Anirban",
            Lastname:"Parya"
        }

    }
} 
console.log(regularUser)
console.log(regularUser.fullname.Userfullname.firstname)
const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}
const obj3={5:"a", 6:"b"}
const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);
//or
const obj5={...obj1,...obj2,...obj3}
console.log(obj5)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))