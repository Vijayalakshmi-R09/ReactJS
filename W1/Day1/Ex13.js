const student=[{studentId:1,studentName:'Remo',address:'no124,selo street',city:'Chennai',marks:40},
{studentId:2,studentName:'Matt',address:'#24,Ohio street',city:'Bangalore',marks:79},
{studentId:3,studentName:'Addy',address:'no:45,viola street',city:'Madurai',marks:74},
{studentId:4,studentName:'Zed',address:'#4050,Parkington street',city:'Bangalore',marks:60},
{studentId:5,studentName:'Seth',address:'#3,Pulio street',city:'Mysore',marks:68},]

console.log("\n the student details after removing specified records : \n");
const newstudents=student.map(x).filter((x)=>{
    if((x=="Bangalore") && (x=="Chennai")){
        return true;}
        else{
            return false;
        }
    });
    console.log(newstudents);
student.forEach((e) => {
    console.log(`StudentName:${e.studentName}, City:${e.city}, StudentId:${e.studentId}, Adrress:${e.address}, Marks:${e.marks}`);
});