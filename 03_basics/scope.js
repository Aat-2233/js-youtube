if(true){
const a =10;
var b = 20;
let c = 30;
}
//console.log(a); (not printed because it is on the other scope)
console.log(b);
//console.log(c);

//nested scopes 
function one(){
    const username="Aatreyee"

    function two(){
        const website = "youtube";
        console.log(username); //username can take its data because for function two it is a global variable
        
    }
    //console.log(website); gives error because website is beyond the scope;
    two();
}
one();

//+++++++++++++++++++++++++++++++++++++++++++++++++
function addone(num){
    return num+1;
}
addone(5)
console.log(addone);

//another way of declaring function
 const addtwo= function(num){
    return num+2;
}
console.log(addtwo(5));




