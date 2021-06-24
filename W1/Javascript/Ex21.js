const employee=[{id:"1001",name:"danny"},
{user:"viji",pws:"****"}];
const salary={sal:50000};
const details={sno:1,...employee,...salary};
console.log("Employee Details:\n");
console.log(details);