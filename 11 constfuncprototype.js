//Constructor function protoype
console.log("Constructor Function Protoytpe");

function Student(){

}

Student.prototype.maths = 70;
Student.prototype.physics = 89;
Student.prototype.chemistry = 93;

Student.prototype.getTotalMarks = function(){
    return this.maths + this.physics + this.chemistry;
}

var s = new Student();
console.log(s);
console.log(s.__proto__);
console.log(s.getTotalMarks());
