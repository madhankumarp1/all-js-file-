//add//
console.log("add")

let add = addnumber(3, 2)
// let add1 =addnumber(-3,-6)
// let add2 =addnumber(7,3)
console.log(add);
// console.log(add1);
// console.log(add2);
function addnumber(a, b) {
   return (a + b);
}


console.log("minutes_seconds")
// minutes_seconds
let seconds = minutes(2)
let seconds1 = minutes(3)
let seconds2 = minutes(5)
console.log(seconds);
// console.log(seconds1);
// console.log(seconds2);
function minutes(x) {
   return (60 * x);
}
console.log("triarea")

// triarea
let area = triangle(3, 2)
let area1 = triangle(7, 4)
let area2 = triangle(10, 10)
console.log(area);
// console.log(area1);
// console.log(area2);
function triangle(h, a) {
   return (h * a) / 2;
}
console.log("nextnumbe")

// nextnumbe
let number = nextnumber(0)
let number1 = nextnumber(9)
let number2 = nextnumber(-2)
console.log(number);
// console.log(number1);
// console.log(number2);
function nextnumber(b) {
   return (1 + b);
}

console.log("twonumber")
// twonumber
let reminder = twonumber(3, 4)
let reminder1 = twonumber(1, 3)
let reminder2 = twonumber(-9, 45)
let reminder3 = twonumber(5, 5)
console.log(reminder);
console.log(reminder1);
console.log(reminder2);
console.log(reminder3);
function twonumber(a, b) {
   return (a % b);
}




// let lessthen100=twonumber1(100,15)
// console.log(lessthen100);


// function twonumber1(a,b){
//    return (a + b) <100;
// }
// let a=twonumber1("something");
// b=("is better than nothing")
// console.log("less than:"+a+b);


// function twonumber1(x){
//    // x="something "
//    return x;
// }

// let lessthen100=twonumber1(1,1)
// console.log(lessthen100);


// function twonumber1(x,y){
//    return  (x && y)? "true":"false";
// }



let lessthen100=twonumber1(9)
console.log(lessthen100);


function twonumber1(x){
   return  (x===7)? "true":"false";
}