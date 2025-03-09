let score = "33abc"
console.log(typeof score)

let valueinNum= Number(score)
console.log(typeof valueinNum)
console.log(valueinNum)

//"33"-> 33 
//"33abc"->Nan
//"null"->0
//true ->1 , false->0
let islogged = 1
let inBoolean = Boolean(islogged)
console.log(inBoolean)
// 1->true , 0->false
//"aatreyee"->true
//" "->false 
let number = 45 
let stringNumber = String(number)
console.log(typeof(stringNumber))
console.log(stringNumber);


let str1="hello"
let str2 =" aatreyee"
let str3= str1+str2;
console.log(str3)

console.log(+true);
console.log(+"");

let gamecounter = 100;
gamecounter++
console.log(gamecounter);
