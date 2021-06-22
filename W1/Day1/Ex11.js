const student=[{studentId:1,studentName:'Remo',address:'no124,selo street,600096',city:'Chennai',marks:40},
{studentId:2,studentName:'Matt',address:'#24,Ohio street,600023',city:'Bangalore',marks:79},
{studentId:3,studentName:'Addy',address:'no:45,viola street,600096',city:'Madurai',marks:74},
{studentId:4,studentName:'Zed',address:'#4050,Parkington street,600023',city:'Bangalore',marks:60},
{studentId:5,studentName:'Seth',address:'#3,Pulio street,600023',city:'Mysore',marks:68},]
student.sort((a, b) => {
    let fa = a.studentName.toLowerCase(),
        fb = b.studentName.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});
console.log("\nSort the student details by Name: \n");
const newstudents=student.map((e)=>{
console.log(`StudentName:${e.studentName}, StudentId:${e.studentId}, Adrress:${e.address}, City:${e.city}, Marks:${e.marks}`)
return e});
