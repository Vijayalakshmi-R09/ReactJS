const student=[{studentId:1,studentName:'Remo',address:'no124,selo street,600096',city:'Chennai',marks:40},
{studentId:2,studentName:'Matt',address:'#24,Ohio street,600023',city:'Bangalore',marks:59},
{studentId:3,studentName:'Addy',address:'no:45,viola street,600096',city:'Madurai',marks:74},
{studentId:4,studentName:'Zed',address:'#4050,Parkington street,600023',city:'Bangalore',marks:60},
{studentId:5,studentName:'Seth',address:'#3,Pulio street,600023',city:'Mysore',marks:65},]

console.log("\n Search a object by StudentID (1) and Remove the object: \n");
let newstudent=student.filter((s)=>{
    var stuName=s.studentName;
    if(stuName=="Matt")
        return false;
    else
        return true;}).map((e)=>{
            console.log(`StudentName:${e.studentName}, City:${e.city}, StudentId:${e.studentId}, Adrress:${e.address}, Marks:${e.marks}`);
        return e; });

