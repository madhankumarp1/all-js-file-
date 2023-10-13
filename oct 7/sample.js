// let arry = ([1, 2, "13", "4", 5, "645"])
// let add = 0;
// let ans =fun1()

// function fun1(){
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



// let  a =([10,900,40,20,30])
// console.log(number)
// var number=a[0]
// var b=a.sort();
// var c=b.slice(-1)
// console.log(b)
// console.log(b.length)
// var f = b.length;
// console.log(f)
// var h = b.length-2
// console.log(h)
// var j =a[h]
// console.log(j)
// for (let i = 1; i < b.length; i++) {
// if (b[i]>number)
// number=a[i]
// }
// console.log(number)



let  arr =([10,900,40,1000,20,30])
for (let  i = 0; i < arr.length; i++)
    for (let j = 0; j < i; j++)
        if (arr[i] < arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
        console.log(arr)
  let b = arr .length-2;
  console.log(b)
let  c = arr[b]
console.log (c)

