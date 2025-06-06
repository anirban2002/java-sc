var b=50
if(true){
    let a=10
    var b=30
    console.log(a)
}
let a=40
console.log(b)
console.log(a)
function One (){
    const username="Anirban"
    function two(){
        const website="Youtube"
        console.log(username)
        console.log(website)
    }
    two()
    console.log(username)
}
// One()
if(true){
    const username ="Anirban"
    if( username=="Anirban"){
        const website=" youtube"
        console.log(username + website)
    }
}
console.log(addone(5))
function addone(num){
    return num + 1
}
const addtwo=function (num){
return num + 2
}
console.log(addtwo(5))