//primitive data type(7)
// strings ,number,boolean,null, undefined , symbol, bigint
const score = 100;
const scoreValue = 100.3
const isLoggedin = false;
const temp = null;
const id=Symbol('123')
const anotherID = Symbol('123');
console.log(id===anotherID);

//reference(non-primitive) data type
// arrays , objects , function 
const princess=["Aatreyee","Ayesha","Soumili","sampriti"]
let myobject= {
    name: "wowow",
    age:23,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof(myobject));
