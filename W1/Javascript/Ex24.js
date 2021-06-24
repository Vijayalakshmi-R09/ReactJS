let mex=new Map();
let k1=1;
let k2=2;
let k3=3;
console.log("MAP USAGE");
mex.set(k1,"Good");
mex.set(k2,"Bad");
mex.set(k3,"Average");
mex.forEach((v,k)=>{
    console.log(k+","+v);
})
k1=null;
console.log("\nBenefit of Map (null):");
mex.forEach((v,k)=>{
    console.log(k+","+v);
})