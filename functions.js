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

function productBudget(arry = {product1, product2, product3, product4, product5}){

    for(let i = 0; i <= arry.length; i++){
        console.log("price of product"+i+" : "+arry[i]);
    }
    // console.log("price of product1: "+product1);
    // console.log("price of product2: "+product2);
    // console.log("price of product3: "+product3);
    // console.log("price of product4: "+product4);
    // console.log("price of product5: "+product5);
}

productBudget(400, 340, 290, 499, 589);

function carBill(){
    console.log("in this function the value of function call are passed to the function peramiter through arguments keyword.");
    console.log(arguments);
}

carBill(889, 983, 234, 904, 342, 592);