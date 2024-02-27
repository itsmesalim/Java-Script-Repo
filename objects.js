/* Object Literal: it is a group of properties and methods.*/

var person = {
    personName: "Salim Ullah",

    birthDay: function(){

        return "Happy Birthday ";
    }
}
console.log(person.personName);
console.log(person.birthDay());

// this keyword:
var man = {
    personName1: "Salim Ullah",
    birthDay1: function(){
        return "Happy Brthday "+this.personName1;
    }
}
console.log(man.birthDay1());

var objec = {
    property: 78,

    method: function(name){
        let myName = "my name is "+name;
        //console.log("my name is "+myName);
        return myName;
    }
}
console.log(objec.property); 
console.log(objec.method("Salim Ullah"));

var employee = {
    firstName: "Salim ",
    lastName: "Ullah",
    designation: "Front end Developer",
    compney: "gotogether",
    exp: 3,
    salary: 32000,

    getEmpInformation: function(){

        let introduction = `\n my name is ${this.firstName} ${this.lastName}
        I am a ${this.designation} I have join ${this.compney} Compney now`;
        
        return introduction;
    },

    promote: function(){
        var isEligibleForPromote;
        if(this.designation == "Front end Developer"){
            if(this.exp >= 3){
                isEligibleForPromote = true;
                this.designation = "Team Leader";
                this.salary = this.salary+(this.salary * 10 / 100); 
            }else{
                isEligibleForPromote = false;
            }
        }else if(this.designation == "Team Leader"){
            if(this.exp >= 5){
                isEligibleForPromote = true;
                this.designation = "Compney Leader";
                this.salary += this.salary * 20 / 100;
            }else{
                isEligibleForPromote = false;
            }
        }
        return isEligibleForPromote;
    }
}
console.log(employee.getEmpInformation());
console.log(employee.promote());

// accessing variables outside of object.
var student = {};   //object declaration
console.log(student);

student.marks = 70;   //accessing marks variable through student object
student.getResult = function(){    //accessing getResult function through student object
    if(this.marks >= 33){

        return "Pass";
    }else{
        return "Fail";
    }
}
console.log(student);
console.log(student.marks);
console.log(student.getResult());

var info = {};
console.log(info);

info.name = "salim ullah";
info.age = 21;

info.getInformation = function(){
    if(this.age <= 20 && this.age >= 15){
        console.log("you are elligible for foot ball team");
    }else if(this.age < 15 ){
        console.log("you are play under19");
    }else{
        console.log("you are overage");
    }
}
console.log(info);
console.log(info.name);
console.log(info.age);
console.log(info.getInformation());

console.log("accessing properties of objects:");
// thier are two ways to access properties of object.
let customer = {
    customerName: "Salim Ullah",
    email: "itsme.salimullah@gmail.com"
};

console.log(customer.customerName);        //1) access through . operator
console.log(customer["customerName"]);

console.log(customer.email);            //2) access through inside brackit and double quote [" "].
console.log(customer["email"]);

var person1 = {
    age: 20,

    birthDay: function(){
        this.age++;
    }
}
console.log(person1.age);
console.log(person1.birthDay());
console.log(person1.age);

//Call Function and Apply Function and Bind Function

var student2 = {
    studentName: "Salim Ullah",
    section: "A",
}

function calculatTotalMarks(subject1, subject2, subject3){
    let totalMarks = subject1+subject2+subject3;
    let massage = `hy ${this.studentName} your total marks is: ${totalMarks} \n and you have got: ${this.section}  Grad`;
    console.log(massage);
}

calculatTotalMarks.call(student2,89,59,82);                   // Call Function
calculatTotalMarks.apply(student2, [87,89,92]);               // Apply Function
var student2Calculate = calculatTotalMarks.bind(student2);    // Bind Function
student2Calculate(60,70,69);

console.log("\n arrow function:");

console.log(this);
var arrowFunction = () =>{
    console.log("inside the function");
}
console.log("outside the function");

arrowFunction();   


let addF = (a,b) => {

    return a+b;
}
console.log(addF(10, 3));
 

console.log("for in loop");
var student3 = {
    studentName: "ahmad",
    email: "ahmad@gmail.com",
    branch: "CS",
    computer: 98,
    maths: 73,
    biology: 82
}
//accessing through . accessor
console.log(student3.studentName);
console.log(student3.email);
console.log(student3.branch);
console.log(student3.computer);
console.log(student3.maths);
console.log(student3.biology);

//accessing through [] accessor
console.log(student3["studentName"]);
console.log(student3["email"]);
console.log(student3["branch"]);
console.log(student3["computer"]);
console.log(student3["maths"]);
console.log(student3["biology"]);

//for in loop: we print this all data of student3 object.
for(let prop in student3){
    console.log(prop, student3[prop]);

    // we can increase the value of subjects see below.
    if(prop == "computer" || prop == "maths" || prop == "biology"){
        student3[prop] = student3[prop] + 5;
    }
}
console.log(student3);
