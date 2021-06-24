
let s=0;
function sum(n1,...n){
    for(let i=0;i<n.length;i++)
    {
        s+=n[i];
    }
    s+=n1;
    return s;
}
console.log("Sum of Values (using spread operator): \n"+sum(14,15,20,25,35,42,10));