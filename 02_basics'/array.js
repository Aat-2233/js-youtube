const myarr=[0,1,2,3,4]
const arr1=["Aatreyee","soumili","ayesha","sampriti"]
const arr2 = new Array(4,5,6,7)
//console.log(myarr[0]);
console.log(arr1[1]);
console.log(arr2[2]);

//Array methods
myarr.push(6);
myarr.push(8);
myarr.pop();
myarr.unshift(9) //adds value to the first
myarr.shift();
myarr.shift(); //removes value from the first 
console.log(myarr.includes(2));
console.log(myarr.indexOf(2));
const newarr= myarr.join(); // coverts the array to string
//console.log(myarr);
console.log(newarr);
console.log(typeof(newarr));

//slice and splice 
console.log("A-", myarr);
const newA = myarr.slice(1,3);
console.log(newA);


console.log("B -", myarr);
const newB = myarr.splice(1,3); //the values are index of the array
console.log(newB);
console.log("after splice", myarr);









