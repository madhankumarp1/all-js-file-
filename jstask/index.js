function myfun(){
    document.body.style.background="red"

   
    // document.getElementById("btn")
}

function wh(){
    document.body.style.background="white"
}


// function my(){
//     let x = 5;
//     let y = 2;
//     let z = x * y;
//     document.getElementById("answer").Value =z;

// }






var a=document.getElementById("1").Value;
var b=document.getElementById("2").Value;

function add(){
    let a= document.getElementById("1").value;
    let b= document.getElementById("2").value;
    document.getElementById("ans").innerHTML=parseInt(a)+parseInt(b);
}
function sum(){
    let a= document.getElementById("1").value;
    let b= document.getElementById("2").value;
    document.getElementById("ans").innerHTML=parseInt(a)-parseInt(b);
}
function mul(){
    let a= document.getElementById("1").value;
    let b= document.getElementById("2").value;
    document.getElementById("ans").innerHTML=parseInt(a)*parseInt(b);
}
function div(){
    let a= document.getElementById("1").value;
    let b= document.getElementById("2").value;
    document.getElementById("ans").innerHTML=parseInt(a)%parseInt(b);
}

// function myFunction() {
//     var y = document.getElementById("txt1").value;
//     var z = document.getElementById("txt2").value;
//     var x = y + z;
//     document.getElementById("demo").innerHTML = x;
//   }

// function mk(){

// let a,b,c;
// a = parseInt(document.getElementById("1").value);
// b = parseInt(document.getElementById("2").value);
// c = a+b;
// document.getElementById("answer").value =c;


// }