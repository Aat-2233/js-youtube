const name="Aatreyee"
const repo = 1;
console.log(name + repo + "value");
console.log(`hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('aatreyee-hc'); //declaration of a string 
console.log(gameName[0]);
console.log(gameName._proto__ ); //showing objects 


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));
const newString = gameName.substring(0,4); //cannot give negative index
console.log(newString);

const anotherString = gameName.slice(-9,4); //negative index are acceptable 
console.log(anotherString);

const one = "  Aatreyee1  ";
console.log(one);
console.log(one.trim()); //deletes the spaces 
 const url = "www/aatreyee/20.com"
 console.log(url.replace("/","-"));
 console.log(url.includes("aatreyee"));

 console.log(url.split("/"));







