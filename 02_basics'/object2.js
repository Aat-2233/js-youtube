const Tinderuser = new Object();//singleton
Tinderuser.id = "12345";
Tinderuser.name = "sammy";
Tinderuser.isLoggedin= false;
//console.log(Tinderuser);

const regularuser={
    email: "some2gmail.com",
    fullname:{
        usefullname:{
        firstname:"Aatreyee",
        lastname:"Nag"
        }
    }
}
console.log(regularuser.fullname.usefullname.lastname);
//optional chaining -> represented by a question mark beside any object name.

//merge
const obj1={ 1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};
const obj4={5:"e", 6:"f"};
//const obj3={obj1 , obj2};
const obj3=Object.assign({},obj1,obj2,obj4);
console.log(obj3);
//a more usefule way of merging objects
const obj5={...obj1,...obj2,...obj4};
console.log(obj5);
//objects in array 
const user=[
    {
        id:1,
        email:"1@gmail.com"
    },
    {
        id:1,
        email:"1@gmail.com"
    },
    {
        id:1,
        email:"1@gmail.com"
    }
]
console.log(Tinderuser);
console.log(Object.keys(Tinderuser)); //gives in the form of array 
console.log(Object.values(Tinderuser));//gives in the form of array 
console.log(Object.entries(Tinderuser));
console.log(Tinderuser.hasOwnProperty("isLoggedin")); //shows if the propety is present or not 

//destructuring 
const course ={
    coursename:"JS in hindi",
    price:"999",
    courseInstructure:"Aatreyee"
}
//extracting values
const{courseInstructure}=course;
console.log(courseInstructure);












