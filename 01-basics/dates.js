let myDate = new Date();
console.log(myDate);
console.log(myDate.toLocaleString())
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof myDate);
let createddate = new Date(2025,2,23,5,3)
console.log(createddate.toDateString());


let myTimeStamp = Date.now()
console.log(myTimeStamp); //shows result in milisecond
console.log(Math.floor(myTimeStamp/1000)); //conversion to seconds

let newdate = new Date();
console.log(newdate.getMonth()+1);
console.log(newdate.getFullYear());



