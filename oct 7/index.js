
// let arr=[11,19,"13","4","645"]

// let num=[];
// sum=0;
// let string=[];
//      for (let i=0;i<arr.length;i++){
//         if (isNaN(arr[i])){
//             string.push(arr[i])
//         }else{
//             num.push(arr[i])
//             sum +=num[i];
//         }
// console.log(sum)
//      }

// task 1


// arry = ([1, 2, "13", "4", 5, "645"])
// add = 0;
// for (let i = 0; i < arry.length; i++) {

//     if (parseInt(arry[i]) == null) {
//         continue;
//     }
//     else if (typeof (arry[i]) == "number") {
//         //   console.log(arry[i])
//         add += arry[i];
//     }
//     let b = add.toString()
//     console.log(b)
// }


// ---------------------------------------------------------

// task 1

// add

// let arry = ([1, 2, "13", "4", 5, "645"])
// let add = 0;
// let ans = fun1()

// function fun1() {
//     for (let i = 0; i < arry.length; i++) {

//         if (parseInt(arry[i]) == null) {
//             continue;
//         }
//         else if (typeof (arry[i]) == "number") {
//             add += arry[i];
//         }
//         // let b = add.toString()
//         // console.log(b)
//     }
// }
// console.log(add)






// task 2


// let  a =([10,900,40,20,30])
// console.log(number)
// var number=a[0]
// for (let i = 1; i < a.length; i++) {
// if (a[i]>number)
// number=a[i]
// }
// console.log(number)


// let  a =([10,900,40,20,30])
// var b=a.sort();
// var f = b.length;
// console.log(f)
// var h = b.length-2
// console.log(h)
// var j = a[h]
// console.log(j)

// task 2------------------

// second largest number

// let  arr =([10,900,40,20,30])
// for (let  i = 0; i < arr.length; i++)
//     for (let j = 1; j < i; j++)
//     if (arr[i] < arr[j]) {
//         let x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//     }
//     console.log(arr)
// let b = arr .length-2;
// console.log(b)
// let  c = arr[b]
// console.log (c)



// task 4

// array asse dec

// let  arr =([8,7,6,5,4,3,2,1])
// for (let  i = 1; i < arr.length; i++)
//     for (let j = 0; j < i; j++)
//     if (arr[i] < arr[j]) {
//         let x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//     }
//     console.log(arr)   

// var Arr = as([1, 7, 2, 8, 3, 4, 5, 0, 9],"Asc");

// function as(Arr,type)
// {
//     var x=0;
//     if(type=="Asc")
//     { 
//         for (var i = 1; i < Arr.length; i++)
//         {
//             for (var j = 0; j < i; j++)
//                 {
//                     if (Arr[i] < Arr[j]) 
//                     {
//                         x = Arr[i];
//                         Arr[i] = Arr[j];
//                         Arr[j] = x;
//                     }
//                 }
//         }
//     }


//     else if(type=="Des")
//     {
//         for (var i = 1; i < Arr.length; i++)
//         {
//             for (var j = 0; j < i; j++)
//             {
//                 if (Arr[i] > Arr[j]) 
//                 {
//                     x = Arr[i];
//                     Arr[i] = Arr[j];
//                     Arr[j] = x;
//                 }
//             }
//         }
//     }
//     console.log(Arr)
// }


// task 3


// let obj = {
//     D: 1,
//     b: 2,
//     c: 3
// }
// let results = []
// for (let i in obj) {
//     results.push([i, obj[i]])
// }
// console.log(results);


// task 5


// let arr = [1, 2, 1, 2, 4]
// // let a = arr.splice("")
// // console.log(a)
// let a = [];
// // console.log(a)
// function remove(arr) {

//     for (i = 0; i < arr.length; i++) {
//         if (a.indexOf(arr[i]) == -1) {
//             a.push(arr[i]);
//             console.log(arr[i])
//         }
//     }
//     return a;

// }
// console.log(remove(arr));



// oct 9



// // -----------------------------------------task next 1

// a = prompt("enter a text ")
// function name(a){
//     for (i = 0; i < a; i++) {
//         if (i % 3 == 0) {
//             console.log("fizz")
//         }
//         else if (i % 5 == 0) {
//             console.log("buzz")
//         }
//         else if (i % 3 == 0 && i % 5 == 0) {
//             console.log("fizzbuzz")
//         }
//         else {
//             console.log(i)
//         }
//     }
// }




//------------------------------------------ task 2


// let  arr = mutp (2,5)

// function mutp (b,c){
//     let   arr=[]
//     for (let i=0; i<c ; i++){
//      arr[i]=b*[i+1]

//     }
//     console.log(arr)
// } 



//--------------------------------------------- task 5

// smallest and largest

var arr = as([10, 900, 40, 4000, 20, 1, 30, 0, 78790])
function as(arr) {
    for (var i = 1; i < arr.length; i++) {


        for (var j = 0; j < i; j++) {

            if (arr[i] < arr[j]) {
                var x = arr[i];
                arr[i] = arr[j];
                arr[j] = x;
            }
        }
    } 
    return arr
}
    console.log(arr)
    var b = arr.length - 1;
    var c = arr[b]
    var d = arr[0]
    console.log("largest Number : "+ c+" ::----------:: "+"Smallest Number : "+d)


//------------------------------------------------------------ task 3


// let arr1 = positive(arr)
let arr1 = positive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

function positive(arr) {
    let count = 0;
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
        else {
            sum = sum + arr[i]
        }
    }

    console.log(count + " " + sum)
}


// ---------------------------------------------task 4


var arr = missing([8,7,6,4,3,2,1]);

function missing(arr) 
{
    var n = arr.length;
    var total = ((n + 2) * (n + 1)) / 2;
    for (let i = 0; i < n; i++) 
    {
      total -= arr[i];
    }
    return total;
  }

  console.log(arr);


// oct 11

//   task 2 reves word in string 

var c = "hello welcome say"
var a = c.split(" ")
console.log(c)
var arr = a
console.log(arr)
var result = as(arr)
function as() {
    for (var i = 1; i < arr.length; i++) {
        for (var j = 0; j < i; j++) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        console.log(arr)
    }
    return arr
}
console.log(arr)
let text = arr.join(" ")
console.log(text)
