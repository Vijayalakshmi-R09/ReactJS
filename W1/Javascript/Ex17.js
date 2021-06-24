let num1=50;
let num2=4;
const arr=[1,2,3,4];
let sum=(num1,num2)=>num1+num2;
console.log("Addition of 2 nos: "+sum(num1,num2));
let mul=(num1,num2)=>num1*num2;
console.log("Multiply of 2 nos: "+mul(num1,num2));
let del=(arr)=> delete arr[0];
console.log(del(arr)+"Deleting first element from array: "+arr[0]);