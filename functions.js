//function: its devide a large program into small pieces of code. 
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

//recusion:
console.log("when a function calls itself are called recusion");
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

function defaultFunction1(name, age, address, marks){
    console.log("my name is "+name);
    console.log("I have "+age+" years old");
    console.log("I am from "+address);
    console.log("I have got "+marks+" marks in my subject");
}

defaultFunction1("Salim Ullah", 23, "Islamabad", 79);

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

console.log("call back function ");

