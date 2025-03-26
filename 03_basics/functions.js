//function addnum(num1,num2){
    //console.log(num1+num2);
    
//}
function addnum(num1,num2){
    return num1+num2;
    
}
addnum(9,10);
addnum(9,"b");
console.log("result is", addnum(14,15));
function userlogin(username){
    if(username===undefined){
        return("please enter a username");
}
    return`${username} just logged in`
}
console.log(userlogin("Aatreyee"));
console.log(userlogin());



