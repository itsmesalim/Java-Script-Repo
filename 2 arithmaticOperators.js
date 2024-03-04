
console.log("Arithmatic Operators");
let l = 8, m = 6;
let sum = l+m;
let subt = l-m;
let mul = l*m;
let div = l/m;
let modu = l%m;
let power = l**m;

console.log(sum);
console.log(subt);
console.log(mul);
console.log(div);
console.log(modu);
console.log(power);

console.log("Assignment Operator");
var n = 40; 
console.log(n);
n += 20;    //n = n + 20  
console.log(n);
n -= 10;    //n = n - 10 
console.log(n);
n *= 8;     //n = n * 8 
console.log(n);
n /= 4;     //n = n / 4 
console.log(n);

// increment and decrement operator 
console.log("increment operator");
var o = 29;
console.log(o);   //output 29
//pre increment
console.log(++o);  //output 30
//post increment
console.log(o++);  //output 30

console.log("decrement operator");
var p = 25;
console.log(p);    //outout 25
//pre decrement
console.log(--p);  //output 24
//post increment
console.log(p--);  //output 24

//Relational operators: this operators are used to define relation 
//among the the things. and its used at the time to take a decision.

console.log("== operators: ");
var q = 30, r = 30;
console.log(q == r);  //output true
var s = 30, t = 20;
console.log(s == t); //output false

console.log("!= operator:");
var q1 = 24, r1 = 25;
console.log(q1 != r1); //output true 
var q2 = 23, r2 = 23;
console.log(q2 != r2); //output false

console.log("< operator:");
var q3 = 34, r3 = 35;
console.log(q3 < r3);
console.log(r3 < q3);

console.log("> operator:");
var q4 = 45, r4 = 34;
console.log(q4 > r4);
console.log(r4 > q4);

console.log(" <= operator:");
var q5 = 32, r5 = 34;
console.log(q5 <= r5);
console.log(r5 <= q5);

console.log(" >= operator:");
var s1 = 45, t1 = 43;
console.log(s1 >= t1);
console.log(t1 >= s1);

/*Logical operator:  it's compare the conditions with eachother 
and find the condition is true or false. thier have three logical operators*/

console.log("&& operators: all the condition must be true");

var u = 20, v = 25;
console.log(u == v && u < v); //false
console.log(u > v && v == u); //false  
console.log(u < v && v > u)  //true
console.log(u < v && v > u && u <= v); //true

console.log("|| operators: at least one condition is must be true"); 
var u1 = 40, v1 = 35;
console.log(u1 > v1 || v1 == u1); //true
console.log(u1 < v1 || v1 < u1); //true
console.log(v1 == u1 || v1 > u1); //false

console.log("! operators: are used in nigation ");
console.log(u1 != v1);  //true
console.log(v1 != u1);  //true
var u2 = 46, v2 = 46;
console.log(u2 != v2);  //false

console.log("hello this statement "+"is concatination "+" it's means "+" that concate through + "+"operator");

console.log("String interpulation operator or Template operator");
var username = "Salim Ullah", age = 20;
var massage = `Hello ${username}, your age is ${age}`;
console.log(massage);

console.log("test1 ");
var c = 5, f;
f = (c * 1.8) + 32;
console.log(f);