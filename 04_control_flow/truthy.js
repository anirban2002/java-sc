const userEmail=[]
if(userEmail){
  console.log("Got user Email");
}
else{
  console.log("Don't have user name");
}
if(userEmail==0){
  console.log("Array is Empty");
}
//Nulish coolescing Operator(??):null Undefined
let val1;
val1=5 ?? 6
val2=undefined??10??20;
console.log(val1);
console.log(val2)