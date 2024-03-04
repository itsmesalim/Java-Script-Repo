/*Polymorphism (many forms): 
thier we have same function in each object but it's do deferent work.
and we call it through chiled object.*/

var person = {          //parent object
    personName: "jhon",
    age: 20,
    getDetails: function(){
        return `Person Name: ${this.personName}. and age: ${this.age}`;
    }
}

var teacher = {             //chiled object
    mainSubject: "maths",
    getDetails: function(){
        return `${this.__proto__.getDetails()} and teacher's main Subject: ${this.mainSubject}`;
    }
}

//calling function
teacher.__proto__ = person;
console.log(teacher.getDetails());
console.log(teacher.getDetails());