
//------------------------------------- task 1

let n = 3 ;
let row = "";
for (let i = 1; i <= n; i++){
  for (let j = 1; j <= (n+1) - i ;j++){
    row+="*";
  }
  row +="\n";
}
console.log(row)



// let n = 5 ;
// let row = "";
// for (let i = 1; i <= n; i++){
//   for (let j = 1; j <= 6 - i ;j++){
//     row+="*";
//   }
//   row +="\n";
// }
// console.log(row)



// -------------------------------------task 2

// for (i=0;i<=50;i++){
//     if (i%2==0){
//         console.log("even number : "+i)
//     }
//     else if (i%1==0){
//          console.log("odd number :"+i)
// }
//     }


// ------------------task 1



    // let x =[23,89,10,66,4]
    // let c =[4,66,89,10,23]

    // for(let i=0;i<x.length;i++){
    //     if (x[i]<=c [i]){
    //         console.log("the lage"+x[i])
    //     }
    // console.log(x[i])
    // }


    // ----------------task 5

// let x="a"
// let y="aeiou"
// let a=x.split("");
// var b=y.split("");

// console.log(a)
// console.log(b)

// for(let i=0;i<=a.length;i++){

// if (x[i]|b){
//     console.log("it")
// }
// else{
//     console.log("not a ")
// }
// }