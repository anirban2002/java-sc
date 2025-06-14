const myObject={
    js:'Javascript',
    cpp:'C++',
    rd:"rudy",
    swift:"swift by apple"
}
for (const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
const programing =["js","rb","py","java"]
for(const key in programing){
    console.log(key, ":" ,programing[key])
    //console.log(programing[key])
}