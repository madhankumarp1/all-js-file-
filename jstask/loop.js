// for (i=0;i<=10;i++){
//     if (i%7==0)
//     continue
// console.log(i)
// }

// while loop


// let i=10;
// while(i>=0){
//     console.log(i)
//     i--;
// }
// console.log("outside :"+i)




// task loop 1


// let x =[13,23,12,45,22,48,66,100]


// function num(x){
//     for (i=0;i<=x.length;i++){

//         if (x[i]%2==0 ){
    
//             console.log("even number "+ x[i])
            
//         }
//         return (x[i])
//     }
// }
// console.log(x[i])

// let x=[13,23,12,45,22,48,66,100] 
// let i =0
// while (i<=x.length){
//   if(x[i]%2==0){
//   console.log("even number "+x[i])
//   }
//   i++
// }


// let x=[13,23,12,45,22,48,66,100] 
// let i =0
// do{
//     if(x[i]%2==0){
//         console.log("even number "+x[i])
//         }
//         i++
// }
// while(i<=x.length);


// task 2


// let arr = [23,56,4,78,5,56,45,56,210,56];
// for (i=0;i<=arr.length;i++){
//     if (arr[i]%8==0 )
//         continue
//     {
//         console.log("even number "+ arr[i])
//     }
// }




// let arr = [23,56,4,78,5,56,45,56,210,56];
// let i =0

// while (i<arr.length) {
//     if(arr[i]!=56)
//         console.log("even number "+arr[i])
//     i++

//  }


// let arr = [23,56,4,78,5,56,45,56,210,56];
// let i =0

// do {
//         if(arr[i]!=56)
//         console.log("even number "+arr[i])
//     i++

//  }
//  while (i<arr.length);  



//  task 3

// let n=num(4,2)
// function num(a,b){
//        var num2=1;
//       for(var i=0;i<b;i++){
//           num2=num2*a;
//       }
//           return num2;
//     }
//       console.log(n)




// let n = num(4, 2)
// function num(a, b) {
//     let i = 0
//     var num2 = 1;

//     while (i < b) {
//         num2 = num2 * a;
//         i++;
//     }
//     return num2;
// }
// console.log(n)


// let n = num(4,2)
// function num(a,b){
//     let i = 0
//     var num2 = 1;
//     do{
//         num2 = num2 * a;
//         i++;
//     }
//     while(i<b){
//         return num2;

//     }
// }
// console.log(n)




// task 4

// let n = 6 ;
// let row = "";
// for (let i = 1; i <= n; i++){
//   for (let j = 1; j <= i;j++){
//     row+=j;
//   }
//   row +="\n";
// }
// console.log(row)


let n = 6 ;
let row = "";
let i=1;

while (i<=n) {
  let j=1;
  i++
  while(j<=i){
    j++
 row +=j;
  }
  row+="\n";
  console.log(row)
}

// let num = 6;
// function patton(num) {
//   for (let i = 1; i <= num; i++) {
//     let num2 = "";
//     for (let j = 1; j < i; j++) {
//       num2 += j;
//     }
//     console.log(num2)
//   }
// }
// (patton(num))