let student = {
    name: "Reza",
    attendance: 14,
    totalSessions: 16
};

if(student.attendance<10){
    console.log("Mahrom az Emtehan");
}
else if(student.attendance>=10){
    console.log("Ejaze Sherkat Dar Emtehan Darad");
}
else if(student.attendance==student.totalSessions){
    console.log("Hozor Kamel");
}