
//while loops
console.log("while loop");

var value1 = 1;

while(value1 <= 15){
    console.log("this is adnan hashmi"+value1);

    value1++;
}

var table = 2;
var table1 = 0;

while(table1 <= 10){
    console.log(table+" * "+table1+" = "+table * table1);

    table1++;
}

//do while loop
console.log("do while loop");
var doValue = 1;
do {
    console.log("hello this is do while loop"+doValue);
    doValue++;

} while (doValue <=20);

var table2 = 3;
var value2 = 1;

do {
    console.log(table2+" * "+value2+" = "+table2 * value2);
    value2++;

} while (value2 <= 10);

//for loop
console.log("for loop");

for(var j1 = 0; j1 <= 20; j1++){

    console.log("this is for loops "+j1);
}

var table3 = 4;
for(var ij = 0; ij <= 10; ij++){

    console.log(table3+" * "+ij+" = "+table3 * ij);
}

for(var ih = 0; ih <= 10; ih++){

    if(ih % 2 == 0){
        console.log(ih+" is even");
    }else{
        console.log(ih+" is odd");
    }
}

//break statement
console.log("break statement");
for (var id = 0; id <= 10; id++){
    if(id == 5){
        console.log("you have reach to 5 now stop the exicution and get out please");
        break;
    }

    console.log("code before the if condition is true"+id);
}

//continue statement
console.log("continue statement");
for(var id = 0; id <= 10; id++){
    if(id == 6){
        console.log("continue means now skip the line 6 and continue after 6");
        continue;
    }

    console.log("code in below the if conditions"+id);
}

//Nested for loop
console.log("nested for loops");
for(var ik = 0; ik <= 7; ik++){
    for(var jk = 0; jk <= 5; jk++){
        var str = `${str}${jk}`;
       // console.log(jk+", ");
    }
    str = `${str}\n`;
   // console.log(ik+", ");
}
console.log(str);

/*Hoisting: are the build-in feature of java script. 
 thier example is that if we decalre a variable in the middle or below 
 of some code and we print it in the top that's will be do work. becouse this 
 below initialize value will be automaticaly hoisted to the top of the code.
 but its print undefine.
*/

console.log("statement 1", x2);
console.log("statement 2");
console.log("statement 3");
console.log("statement 4");
var x2 = 4;                 //Hoisted variable
console.log("statement 5");
console.log("statement 6");
console.log("statement 7");
console.log("statement 8");