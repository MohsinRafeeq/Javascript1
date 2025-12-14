// primitive 
//  7 types string , number , boolean , null, undefined, symbol, BigInt,

const score = 100
const scoreValue = 100.2
const isLoggedIn= false
const outsidetemp= null
let username;
const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id===anotherID);

// let BigNumber = 34234235642352342343n

// Reference (non-primitive)
//  arrays, objects, Functions

arrays =["Mohsin", "rafique", "Developer"];
let myobje = {
    name: "Mohsin",
    age: "23",
}

const myfunction = function(){
    console.log("Helloworld");
}

console.log(typeof myfunction);


