// 1

let convet=age(65)
let convet1=age(0)
let convet2=age(20)
console.log("age in to day:"+convet,convet1,convet2);
function age(x){
   return  365*x;
}



// 2


let lessthe100=twonumber(22,15);
let lessthe1002=twonumber(83,34);
let lessthe1003=twonumber(3,77);
console.log("less then 100:"+lessthe100,lessthe1002,lessthe1003);

function twonumber(a,b){
    return(a+b)<100;
}


// 3

let hours=second(2);
let hours1=second(10);
let hours2=second(24);
console.log("hours into second :"+ hours,hours1,hours2);
function second(x){
    return (60*x)*60;
}

// 4

let sum=polygon(3)
let sum1=polygon(4)
let sum2=polygon(6)

console.log("polygon :"+sum,sum1,sum2);
function polygon(a){
    return (a-2)*180;
}

// 5

let a=twoname("something")
let a1=twoname("is better than nothing")
let a2=twoname("bob jane")
console.log("text :"+a,a1,a2);
function twoname(x){
    return "something"+ x ;
}

// 6

let lessthen=number("5")
let lessthen1=number("0")
let lessthen2=number("-2")
console.log("less then or equal :"+lessthen,lessthen1,lessthen2)
function number(x){
    return (x<=0)?true:false;
}


// 7

let usingtheand=operatar(true,false)
let usingtheand3=operatar(true,true)
let usingtheand1=operatar(false,true)
let usingtheand2=operatar(false,false)
console.log("using and operat :"+usingtheand,usingtheand3,usingtheand1,usingtheand2)
function operatar(x,y){
    return x&&y;
}

// 8

let  farmproblem=breed(2,3,5)
let  farmproblem2=breed(1,2,3)
let  farmproblem3=breed(5,2,8)
console.log("form problem :"+farmproblem,farmproblem2,farmproblem3)
function breed(a,b,c){
    return (a*2)+(b*4)+(c*4);
}

// 9

let equalcheck=boolean(1,true);
let equalcheck2=boolean(0,"0");
let equalcheck3=boolean(1,1);
console.log("equalcheck :"+equalcheck,equalcheck2,equalcheck3);
function boolean(x,y){
return x===y;
}

// 10
let fixthe=expression(4)
let fixthe2=expression(9)
let fixthe3=expression(7)
console.log("fix the expression :"+fixthe,fixthe2,fixthe3);
function expression(x){
    return  (x===7)? "true":"false";
}