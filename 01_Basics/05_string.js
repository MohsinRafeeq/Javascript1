const name ="Mohsin"
const RepoCount = "50"

// console.log(name + RepoCount + "Value"); 

// console.log(`My name is ${name} the reports are ${RepoCount}`);


const gameName = new String ('MohsinRaf-ique-')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(6));
console.log(gameName.indexOf('n'));

const newString =gameName.substring(0,5)
console.log(newString);


const anotherstring = gameName.slice(-4,4)
console.log(anotherstring);

const newStringone = "   Mohsin   "
console.log(newStringone);
console.log(newString.trim()); 
// trim read thorugh mdn

const url = "https:Mohsin.guru/Mohsin%20Rafique"
console.log(url.replace('%20',"-"));
console.log(url.includes('IT'));

console.log(gameName.split('-'));




