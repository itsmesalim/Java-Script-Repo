console.log("Conditional statement");
//if condition
console.log("if condition: it's print something when it's true otherwise it's not print anything then it skiped");

var marks = 40;
if(marks > 33){
    console.log("you are pass ")
}

if(marks < 33){
    console.log("you are fail please try again");
}

console.log("is-else condition: thier have two block if one block is true the other block will be skiped.");

var age = 18;
if(age >= 18){
    console.log("you are able to apply for CNIC ")
}else{
    console.log("you are underage now ")
}
//else if condition
console.log("else-if: thier have some condition compiler checks all conditions which is true then it's print and the other all condition is skiped.");
var subjectMarks = 76;
if(subjectMarks >= 90){ 
    console.log("Congratulation");
    console.log("you have got A+ grad");
}else if(subjectMarks >= 80){ 
    console.log("Congratulation");
    console.log("you have got A grad");
}else if(subjectMarks >= 70){
    console.log("Congratulation");
    console.log("you have got B grad");
}else if(subjectMarks >= 60){
    console.log("Congratulation");
    console.log("you have got C grad");
}else if(subjectMarks >= 50){
    console.log("Congratulation");
    console.log("you have passed your subject");
}else{
    console.log("do't mind ");
    console.log("you have fail please try again");
}

//Nested ifs
console.log("Nested ifs")
var age = 24;
var subjecScore = 73;
var salary = 79.645;
var points = 28;

if(age < 25){
    if(subjecScore > 70){
        if(salary > 75.50){
            if(points < 25){
                console.log("you have complete all conditions");
            }else{
                console.log("you have incomplete the all conditions");
            }
        }else{
            console.log("you have incomplete the all conditions");
        }
    }else{
        console.log("you have incomplete the all conditions");
    }
}else{
    console.log("you have incomplete the all conditions");
}

//positive or negative
console.log("Write a JavaScript program to check whether the number is positive or negative.");

var valueNumber = 7;
if(valueNumber > 0){
    console.log(valueNumber+" is positive");
}else if(valueNumber < 0){
    console.log(valueNumber+" is negative");
}else{
    console.log(valueNumber+" is zero" );
}

//switch cases
console.log("Switch case: ");

var studentAge = 18;
switch (studentAge) {
    case 21:
        console.log("you are over age");
        break;
    case 14:
        console.log("you are under age");
        break;
    case 18:
        console.log("you have best in this age");
        break;
    default:
        console.log("don't match with any of the above");
        break;
}

console.log("let keyword: that acts like a var but a little change among both ");

/* var    ==    let */
//thier have no deference

var n1 = 10; // is a global variable we access it every where in the program either inside or outside of the function.
let m1 = 10; // is a global variable we access it every where in the program either inside or outside of the function.

//             main deference

if(1 == 1){
    var z = 10; //now we print z inside / outside the if block
    console.log("inside z = "+z);
}

console.log("outside z = "+z);

// let is a block level.

if(1 == 1){
    let z2 = 10;  //now we print z2 only inside the if block
    console.log("inside z2 = "+z2);
}

//console.log("outside z2 = "+z2); // its give us the massage z2 is not define.

//checked the number is prime or not.
let numIs=function(n)
{
    if(n>1){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return "number is not prime"
        }
        else{
            return"number is prime";
        }
    }
}
}
console.log(numIs(6));

//Write a JavaScript function to compute the sum of the two given integers and return it. If the two values are same, then returns triple their sum and return it.
function sumOrTripleSum(num1, num2){
    let sum = num1 + num2;

    if(num1 == num2){
        return 3 * sum;
    }else{
        return sum;
    }
}

console.log(sumOrTripleSum(10, 20));
console.log(sumOrTripleSum(15, 30));
console.log(sumOrTripleSum(8, 8));