//inheritane with constructor using function call
console.log("\n inheritane with constructor using function call");

//constructor function
var Teacher = function(teacherName){
    this.teacherName = teacherName;
}

//also a constructor function
var PhysicsTeacher = function(teacherName, mainSubject){
    Teacher.call(this, teacherName);    //call method call the Teacher Constructor
    this.mainSubject = mainSubject;
}


var physicsTeacher = new PhysicsTeacher("scott", "Physics");
var physicsTeacher2 = new PhysicsTeacher("salim", "computer");
console.log(physicsTeacher);
console.log(physicsTeacher2);

//-----------------------------------------------------------------------------------------------------------

// same code through __proto__.

console.log("\n inheritane with constructor using __proto__");

//constructor function
var Teacher = function(teacherName){
    this.teacherName = teacherName;
}

//also a constructor function
var PhysicsTeacher = function(mainSubject){
    this.mainSubject = mainSubject;
}


var physicsTeacher = new PhysicsTeacher("Physics");
physicsTeacher.__proto__ = new Teacher("Scott");
console.log(physicsTeacher);
console.log(physicsTeacher.teacherName);

var physicsTeacher2 = new PhysicsTeacher("computer");
physicsTeacher2.__proto__ = new Teacher("salim");
console.log(physicsTeacher2);
console.log(physicsTeacher2.teacherName);



// var physicsTeacher2 = new PhysicsTeacher("salim", "computer");
// console.log(physicsTeacher);
// console.log(physicsTeacher2);
