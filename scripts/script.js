console.log("Script");

//let student = "Brandon";
const student = {
    firstName:"Brandon",
    lastName:"Britt",
    age:99,
    email:"brandon@gmail.com",
    isActive:true,
    fullName:function(){
        return this.firstName+" " + this.lastName;
    }
};

console.log(student.fullName());

function displayStudent(){
    document.getElementById("fname".innerhtml);
    document.getElementById("lname".innerhtml);
}
