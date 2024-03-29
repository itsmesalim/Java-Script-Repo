console.log("Inheritance:");
/*Ineritance: is the concept where child object is
  created on the base of existing parent object. 
*/
var personDetail = {      // parent object
    personName: "Jhon",
    age: 20
};

var studentData = {  // child object
    rollNo: 12,
    marks: 93
};

var customerInfo = {
    shippingAddres: "Dir Lower Pakistan"
};

//accessing parent object in child object
studentData.__proto__ = personDetail; 

console.log(studentData); //output 
//beautifull output
console.log(` Name: ${studentData.personName}, \n age: ${studentData.age}, \n RollNo: ${studentData.rollNo}, \n Marks: ${studentData.marks}`);

//another example
var baseObject = {sName: "ghazi", fName: "gulo", class: "9th"};
var childObject = {rollNom: 78, section: "A"};

childObject.__proto__ = baseObject;
console.log(childObject);
 
//onather example
var user = {
    userName: "",
    password: "",
    isLogedIn: false,

    logIn: function(){
        if(this.userName == "itsme.system" && this.password == "its.123"){
           console.log("you have been able to go dash board");
            this.isLogedIn = true;
            return true;
        }else{
            console.log("don't match your email and password ");
            this.isLogedIn = false;
            return false;
        }
    }
}

var manager = {
    departmentName: "R&D",

    approveLeave: function(){
        return "approve leaves";
    },

    dashBoard: function(){
        return "dashboard manager";
    }
};
manager.__proto__ = user;
manager.userName = "itsme.system";
manager.password = "its.123";
console.log(manager.logIn());
console.log("user name: "+manager.userName);
console.log("password: "+manager.password);
console.log(manager.departmentName);
console.log(manager.approveLeave());
console.log(manager.dashBoard());
 
//prorto chain/ signin, login,
console.log("\n Proto-Chain");
var signIn = {
    fName: "",
    lName: "",
    email: "",
    password: "",

    sign: function(fn, ln, em, ps){

        console.log(this.fName = fn);
        console.log(this.lName = ln);
        console.log(this.email = em);
        console.log(this.password = ps);

        return "Sign-in Successfull!";
    }
}
var SignInData = signIn.sign("jhon", "dowson", "jhon@gmail.com", 123456);
console.log(SignInData);

var logIn= {
    contact: "",
    address: "",

    log: function(co, ad){

        console.log(this.contact = co);
        console.log(this.address = ad);

        return "Log-in Successfull";
    }
}
var logInData = logIn.log(34832659494, "i/11 islamabad", );


logIn.__proto__ = signIn;
console.log(logIn.email);
console.log(logIn.password);
console.log(logInData);

console.log("\n Lexical Environment and Scope chain");

var x = 10;
console.log(x);
function mfun1(){
    var y = 20;
    console.log(x,y);

    function mfunc2(){
        var z = 30;
        console.log(x,y,z);
    }
    mfunc2();
}
mfun1();

//Clouseres
console.log("\n Clouseres and Encapsulation");
var bankAccount = function(){
    var accountBalance = 1000;

    var somePrivate = function(){

    }

    var deposit = function(depositAmount){
        accountBalance = accountBalance + depositAmount;
        //return `Account Balance after Deposit: ${accountBalance}`;
    }

    var withdraw = function(withdrawAmmount){
        accountBalance = accountBalance - withdrawAmmount;
       // return `Account Balance after Withdraw: ${accountBalance}`;
    }

    var getCuruntBalance = function(){
        
        // return `my curunt balance is: ${accountBalance}`;
        return accountBalance;
    }

    return {deposit, withdraw, getCuruntBalance};
}
var firstAccount = bankAccount();
var secondAccount = bankAccount();
console.log(`Initial first Account Balance: ${firstAccount.getCuruntBalance()}`); //1000
console.log(`Initial second Account Balance: ${secondAccount.getCuruntBalance()}`); //1000

firstAccount.deposit(200);
console.log(`First Account Balance after Deposit: ${firstAccount.getCuruntBalance()}`);  //1200

secondAccount.deposit(100);
console.log(`Second Account Balance after Deposit: ${secondAccount.getCuruntBalance()}`);

firstAccount.withdraw(50);
console.log(`First Account Balance after Withdraw: ${firstAccount.getCuruntBalance()}`);  //1150

secondAccount.withdraw(300);
console.log(`Second Account Balance after Withdraw: ${secondAccount.getCuruntBalance()}`);

