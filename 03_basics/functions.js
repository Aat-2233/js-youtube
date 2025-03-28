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

//(...) this is the rest operator 
function calculatecartprice(...num){
    return num;

}
console.log(calculatecartprice(200,300,400)); //creates an array and stores the values.

//another function
function calculatecartprice1(val1,val2,...num){
    return num;
}
console.log(calculatecartprice1(200,300,400,500));//we see that the first two value is assigned to val and val2 and the rest values are displayed.


//passing an object into the function 
const user={
    username:"Aatreyee",
    price:1999
};

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
};
handleobject(user);
//another way of implementing the function 
handleobject({
    username:"sam",
    price:200
})

//passing array into the function
const myarr=[100,200,300,400]
function returnsecondvalue(getarray){
    return getarray[1];
}
console.log(returnsecondvalue(myarr));





