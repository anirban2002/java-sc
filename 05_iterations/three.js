const arr=[1,2,3,4,5]
for(const num of arr){
   // console.log(num);
}
const greeting ="Hello World"
for(const i of greeting){
    //console.log(`Each char is ${i}`)
    if(i==0){
        break;
    }
}
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")
map.set('IN',"India")
console.log(map);
for(const[key,value] of map){
    console.log(key,":-", value)
}

