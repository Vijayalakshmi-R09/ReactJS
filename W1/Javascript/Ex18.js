let mul=(n1)=>n1*3;
const myHocfn=(d,fn)=>{
    let val=d+10;
    return fn(val);}
let total=myHocfn(100,mul);
console.log("The total= "+total);