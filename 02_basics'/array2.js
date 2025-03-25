const flowers =[ "lily", "rose", "sunflower" , "marigold"];
const fruits =["watermelon", "guava", "apple","orange"];
 const arr = flowers.concat(fruits); //adds arrays 
console.log(arr);
//another way of adding arrays(more usable)(more than 2 array can be added)
const newarr=[...flowers , ...fruits];
console.log(newarr);


const mixarr= [1,2,3,[4,5,6,],7,8[9,10,[11,12]]];
const arr1=mixarr.flat(3);
console.log(arr1);

console.log(Array.isArray("aatreyee"));
console.log(Array.from("aatreyee")); //converts to array

let score1 =100;
let score2=200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));


