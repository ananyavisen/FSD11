//print
console.log("Hello");
//variables
let num=100;
let str="Hello World";
let und;
let nul=null;
let bool=true;
console.log(typeof(nul));
console.log(typeof(und));
let a=6, b=2;
//Operators
console.log(a-b," ", a+b," ", a*b, " ", a/b, " ", a%b);
let k=60;
var i=20;
var i=30;
//Functions
function add(p,q){
    return p+q;
}
console.log(add(12,23));
//Arrow Functions
const multiply=(p,q)=>p*q;
console.log("arrow function", multiply(5,5));
//Array
let arr=[10,20,43,20,34,50];
console.log(arr[0])
arr.push(43);
arr.sort()
console.log(arr);
// object
let student={
    name: "Ananya",
    age: 20,
    course: "B.tech" 
};
// date
let date=new Date();
console.log(date);
// checking time of for loop
console.time(" test: ")
for(let i=0; i<100000; i++){}
console.timeEnd(" test: ");
console.group();
console.log("group1")
console.log("group2")
console.groupEnd()

//table
let students={name: "Ananya", age:"20", course:"CSE"};
console.table(students);