/*function: A function is a block of reusable code that performs a specific task. 
It can take inputs, perform operations, and return outputs. 
Functions help organize code, promote reusability, and 
make programs easier to understand and maintain. */

function sumFunction(a , b){
    var sumOfTwoNumbers = a + b;

    console.log("sum = "+sumOfTwoNumbers);
}
sumFunction(40, 60);
sumFunction(34, 6);

// thier we have assign a function to a let variable.
let getSimpleInterest = function(principle, rateOfInterest,noOfYears){
    let simpleInterest = (principle * rateOfInterest * noOfYears)/100;
    return(simpleInterest);
}

//the function call also assign to a variable.
let callFunction = getSimpleInterest(1000, 7.3, 4);
let callFunction1 = getSimpleInterest(8000, 5.7, 10);
console.log(callFunction);
console.log(callFunction1);

//function with no arguments and no return.
function show(){
    for(var i = 0; i <= 5; i++){
    console.log("this is function with no argumeants and no return value ");
    console.log("that argument is empty ");
    }
}

show();
show();

// a functioncall inside another function
function showCountry(){
    console.log("Pakistan");

    showCity();
}

function showCity(){
    console.log("Peshawar");
    console.log("Islamabad");
}

showCountry();

let chiledFunction = function(u){
    
    return u * u;
}

let parentFunction = function(u){
   // console.log("in this function we have access the function call of the above chiled function");
    return chiledFunction(u)*u;
}

let answer = parentFunction(4);
console.log(answer);

// arguments:
function carBill(){
    console.log("in this function the value of function call are passed to the function peramiter through arguments keyword.");
    let totalBill = 0;
    for(let i = 0; i < arguments.length; i++){
        console.log("the price of car "+(i+1)+" : "+arguments[i]);
        totalBill = totalBill+arguments[i];
    }   
    console.log("my total bill are : "+totalBill);
}

carBill(889, 983, 234, 904, 342, 592);

console.log("Recusion: when a function calls itself are called recusion");
/* 
    It's particularly useful for solving problems that 
    can be broken down into smaller, similar subproblems. 
    For example, computing factorials:
*/
function factorial(number){
    
    if(number == 1){

        return 1;
    }else{
        //thier the function calls itself
        console.log(number+"!");
        //console.log(number+" * "+(number-1)+" * "+(number-1)+" * "+(number-1)+" * "+(number-1)+" = "+number * (number-1) * (number-1) * (number-1) * (number-1));
        return factorial(number-1)*number;  
    }
}

console.log(factorial(5));

//when we assign a value to variable in parameter it's called default function.
function defaultFunction(a = 6){
    console.log("this is default function");
    console.log(a);
}
defaultFunction();  // thier the parameter value will be print automaticaly
defaultFunction(8); //thier the parameter value will be ignored and assigned the value of function call to the parameter

function defaultFunction1(name = "Salim Ullah", age = 23, address = "Islamabad", marks =  79){
    console.log("my name is "+name);
    console.log("I have "+age+" years old");
    console.log("I am from "+address);
    console.log("I have got "+marks+" marks in my subject");
}

defaultFunction1();

/*Scope of variable: their are three type of scope of variable like:
1) global variable: which is accessable everywhere in the entire program.
2) local variable: which is accessable only inside the function.
3) block-level variable: it's only accessable inside the condition block and loops block and it's declare with let keyword only.*/

console.log("scope of variables");
console.log("global variable inside the entire program") 
var globalVar = 30; 
let globalVarLet = 20;
console.log("globalVar = "+globalVar);
console.log("globalVarLet = "+globalVarLet);

function localVarLet(){
    console.log("global variable inside the function");
    console.log("globalVar = "+globalVar);
    console.log("globalVarLet = "+globalVarLet);

    console.log("local variable inside the function");
    var localVarInsid = 40;
    let localVarLetInside = 40;
    console.log("localVarInside = "+localVarInsid);
    console.log("localVarLetInside = "+localVarLetInside);

    if(localVarInsid == localVarLetInside){
        console.log("local variable inside the if block");
        var localVareInsideIf = 56;  //local variable it's accessable inside the localVarLet function.
        let blockLevelLet = 30;  //block-level variable it's accessable only inside the if block.

        console.log("locaVareInsideIf = "+localVareInsideIf);
        console.log("blockLevelLet = "+ blockLevelLet);

        console.log("global variable inside the if block");
        console.log("globalVar = "+globalVar);
        console.log("globalVarLet = "+globalVarLet);
    } 
}

localVarLet();

/*pure function: it's doesn't access any external value. in this we will 
 access the arguments of pure function and declare some additional local variable
 it's not access any global variable. it is independent function.
*/
console.log("pure function");

function getSquare1(n){
    let square = n*n;
    return square;
}

console.log(getSquare1(5));
 
function logIn(username, password){
    if(username == "itsme.salim" && password == 123){

        return true;
    }else{
        return false;
    }
}

console.log(logIn("itsme.salim", 123));
console.log(logIn("this.me", 34587));

console.log("call back function: a function takes another function as an arguments is callback function");

//define a callback function
function callBack1(name, age){

    console.log(`I am ${name}, and I have ${age}`);
}

function doWork(name, age, callback){
    name = "Mr "+name;
    age++;
    callback(name, age);
}
doWork("Salim Ullah", 40, callBack1);

function year (year, month){
    console.log(`year : ${year}, month : ${month}`)
}

function curentYear(year, month, callback){
    callback(year, month);
}
curentYear(2024, "february", year);


console.log("set timeout function: it's call the callback function at once in a spacipic time of seconds.");
function sayHello(){
    console.log("hello");
}

function sayGoodBy(){
    console.log("good By");
    sayHello();
}

/*
    setTimeout(sayGoodBy, 5*1000); //setTimeout function invoke the call back (sayGoodBy) function after 5 seconds.

    console.log("setInterval function: it's like a setTimeout but it's exicute the callback function multiple time repeatedly.");
    // Callback function
    function callBack(){
        console.log("Hello");
    }

    // Set an interval to call callBack function every 2000 milliseconds (2 seconds).
    let myInterval = setInterval(callBack, 2000);

    // Define a function to stop the interval after 20 seconds.
    function stopInterval(){
        clearInterval(myInterval);
    }
    // Set a timeout to call stopInterval function after 20 seconds.
    setTimeout(stopInterval, 20*1000);
*/

/*Higher Order Function: it take one or more function as arguments or
return a function as its arguments.*/
function add2Numbers(a, b, sum){
    return sum(a , b);
}
function add(a , b){
    return a + b;
}
console.log(add2Numbers(14 , 50, add));

/*Curring: */

function curry(arg1){
    return function(arg2){
        return function(arg3){
            return function(){
                let name = arg1;
                let age = arg2;
                let address = arg3;

                return {name, age, address};
            }
        }
    }
}
console.log(curry("Salim Ullah")(24)("Islamabad")());

//another example
function nestedFunctions(vaue1){
    return function(value2){
        let mul1 = vaue1 * value2;
        
        return function(value3){
            let mul2 = mul1 * value3;
            return mul2;
        }
    }
}
console.log(nestedFunctions(10)(20)(30));

//another example
function sendAndRecieveMassage(reciever){
    let result1 = `@${reciever}`;

    return function(massage){
        let result2 = `${result1} : ${massage}`;
        
        return function(hour, minuts, timePeriod){
            let result3 = `${result2} at ${hour} : ${minuts} ${timePeriod}`;

            return function (sender){
                let result4 = `${result3} - from ${sender}`;

                return result4;
            }
        }
    }
}
console.log(sendAndRecieveMassage("Salim Ullah")("Hi how are you?")(10, 30, "am")("Ubaid"));

//test
function addPy(input) {
    if (input.startsWith("Py")) {
        return input; 
    } else {
        return "Py" + input; 
    }
}

// Example usage:
console.log(addPy("thon")); 
console.log(addPy("Pythagoras"));