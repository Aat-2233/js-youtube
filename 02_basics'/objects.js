//objects are declared in two ways: 1)in literals 2)in constructors 
const mysym = Symbol("key1");
// object literals
const  jsuser = {
    name: "Aatreyee",
    "full name" : "Aatreyee nag",
    age: 20,
    [mysym] : "mykey1", //declaration of symbol in an object 
    location:"kolkata",
    email:"aatreyeenag@hmail.com",
    isLoggedin: false,
    lastlogindays:["monday","tuesday"]
}
console.log(jsuser.email);
console.log(jsuser["email"]); //since it is considered as string and not as a list 
console.log(jsuser["full name"]);
console.log(jsuser[mysym]); //to show symbol 

jsuser.email="suju@gmail.com"; //to change the value in the object.
//Object.freeze(jsuser); //now i cannot change the values of the object 
//jsuser.email="soupy.gmailcom"; //we see that the value hasnt changed after freezing 
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello world")
}

jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
}


console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


    







