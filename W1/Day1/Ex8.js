let employee=["David","Peter","Rose","Lexi","Sonny","Tina","Ram","Zem","Problem","Yasmine"];
console.log("The sixe of array: "+employee.length);
   
    const n=employee.map((x,idx)=>{
        if(idx%2==0){
            return `${idx+1}, Er.${x}`;
        }
        else 
        {
            return `${idx+1}, Dr.${x}`;
        }
    
    })
console.log("\nEmployee NamesList: \n");
for(let i=0;i<employee.length;i++)
{
    console.log(n[i]);
}

