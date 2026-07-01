console.log("Hello Java Script!");

let name = "Devindi";
name = "Wicky";
console.log(name);

let answer = "Yes";
console.log(answer);

let age=20;
console.log(age);

let question=false;
console.log(question);

alert("Hello Guys!")

let phone = "070092";
console.log(phone);

let webName="Webiste making";
console.log(webName);

//-------------------DATA TYPES----------------------------

//String
let myname = "Devindi";
console.log(typeof myname);

//boolean
let isAFterAL=false;
console.log(typeof isAFterAL);

//object
let customers =[];
console.log(typeof customers);

//object
let customer = {};
console.log(typeof customer);

//number
let salary=75000;
console.log(typeof salary);
//number
let mySalary=125000.00;
console.log(typeof mySalary); 

//---------------------OPERATORS--------------------------
// + - * % / 
let x=10;
let y=20;
let z=x+y;
console.log(z);

//-----------------comparison operators--------------------
// > < >= <= == !=
// >== <== === !== --> check the type by adding additional =

let a=55;
let b="55";
console.log(a==b);//true - dont check the data type
console.log(a===b);//false - check the data type

//-----------------logical operators-----------------------
// or - and - not
// || - && - !

//----------&&-----------------------
if(true && true){
    console.log("true");
}else{
    console.log("False"); 
}

if(false && false){
    console.log("true");
}else{
    console.log("False"); 
}

if(true && false){
    console.log("true");
}else{
    console.log("False"); 
}
//----------||-----------------------
if(true || true){
    console.log("true");
}else{
    console.log("False"); 
}

if(false || false){
    console.log("true");
}else{
    console.log("False"); 
}

if(true || false){
    console.log("true");
}else{
    console.log("False"); 
}
//----------!-----------------------
if(!true){
    console.log("true");
}else{
    console.log("False"); 
}

if(!false){
    console.log("true");
}else{
    console.log("False"); 
}

//--------------if-else statements--------------
let X = 50;
let Y = 50;

if (X > Y) {
    console.log("X is greater than Y");
} else if (X < Y) {
    console.log("Y is greater than X");
} else {
    console.log("X and Y are equal!");
}
//-------------switch----------------------
let today = 7;
switch (today) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednessday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend!");             
}

//----------------loops----------------------
//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//do-while loop
do {
    console.log(i);
    i++;
} while (i < 10);

//---------------Functions--------------------

//public void static in here no need return type - like int /String/double bcz js type is dynamic.
function add(x,y) {
    return x+y;
}

let result = add(10,20);
console.log(result);

//-----------------Arrays---------------------

let number = [1,2,3,4,5];

for (let index = 0; index < number.length; index++) {
    console.log(number[index]); 
}

let line = [1,2,3,4,5,"Devindi","045896"]; // JS type is dynamic we can put string int(numbers) to a same array

for (let index = 0; index < line.length; index++) {
    console.log(line[index]); 
}

//--------------------OOP---------------------
//object

let mycustomers = {
    name: "Devindi",
    age: 20,
    isAfterAl: true,
    salary: 100000.00
}
console.log(mycustomers);








