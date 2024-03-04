console.log("Constructor");
var createEmployee = function(empName, empId, empSalary){
    var employee = {};
    employee.employeeName = empName,
    employee.employeeId = empId,
    employee.salary = empSalary,

    employee.getEmployeeName = function(){
        return this.employeeName;
    }

    return employee;
}

/* var employee1 = {
    employeeName: "Scott",
    employeeId: 1,
    salary: 10000,

    getEmployeeName: function(){
        return this.employeeName;
    }
}
*/

/* 
var employee2 = {
    employeeName: "Allen",
    employeeId: 2,
    salary: 20000,

    getEmployeeName: function(){
        return this.employeeName;
    }
}
*/

// now we instead of the above
var employee1 = createEmployee("Ali", 3, 20979);
var employee2 = createEmployee("khan", 6, 43097);
var employee3 = createEmployee("jamil", 8, 9864);

console.log(employee1);
console.log(employee2);
console.log(employee3);

// Now we done this code through new keyword
console.log("creating object through new keyword");

var Employee = function(empName, empId, empSalary){
    /* var employee = {};    thier no need to create object becouse 
    we use new keyword at the end so it create the object automatically 
    so just write this keyword before each property or methods.*/

    this.employeeName = empName,
    this.employeeId = empId,
    this.salary = empSalary,

    this.getEmployeeName = function(){
        return this.employeeName;
    }
}

// now we instead of the above
var employee1 = new Employee("Ali", 3, 20979);
var employee2 = new Employee("khan", 6, 43097);
var employee3 = new Employee("jamil", 8, 9864);

console.log(employee1);
console.log(employee2);
console.log(employee3);
