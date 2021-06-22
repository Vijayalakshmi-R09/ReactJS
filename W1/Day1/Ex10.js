const numberslist=[2,3,4,5,6,7,8,9,10,11];


console.log("\nPrime numbers extracted from the list: \n");
for(let i=0;i<numberslist.length;i++) 
{
    let st=numberslist[i];
    
    for(let j=2;j<st;j++)
    
    {
    var b=true;
    if(st%j==0) 
    {
        b=false;  
        break;
    }
    else
    {
        b=true;
    }

}
if(b)
{
console.log(st);
}
}