const name="Anirban"
const repoCount = 50
console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String('AnirbanParya')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('b'));
const newString=gameName.substring(0, 4)
console.log(newString);
const anotherString=gameName.slice(6, -4)
console.log(anotherString)
const url = "https://anirban.com/anirban%20parya"
console.log(url.replace('%20','-'))
console.log(url.includes('anirban'))