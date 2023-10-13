
// task 1



// let str = parseInt(prompt("Enter a Text or Number "));

// console.log("Input : "+str);

//     if (!str)
//     {
//         alert("It is a String ");
//     }

//     // else if (str.length === 0){
//     //   alert ("space")
//     // }
//     else{
//       alert("It is not a string")
//     }



// if (typeof str === "string"){
//   alert("The string is blank");
// }
// else {
//   alert("The string is not blank");
// }


// let input=prompt("Enter a Text or Number ")
// let type = typeof (input);
// if ( type === "String"){

//     alert("it a String")
// }
// else{
//     alert(" it not string")
// }

// task 2


// let str = prompt("Enter a Text or Number ")
// let str1 = str.trim()
//  if (typeof str1 === "string" && str1.length === 0) {
//   alert("The string is blank");
// }
// else {
//   alert("The string is not blank");
// }


// task 3

// let str =prompt("Enter a text to split");
//   str = str.split(" ")
//   console.log(str);  


//task 4


// let str0 =prompt("Enter a text");
// let str1 =prompt("Enter a text to slice number");
//    arr = str0.slice(str0,str1)
//   alert(arr); 



// task 5

// let protect_email =prompt("Enter a text");

// protect_email = function (user_email) {
//   var avg, splitted, part1, part2;
//   splitted = user_email.split("@");
//   part1 = splitted[0];
//   avg = part1.length / 2;
//   part1 = part1.substring(0, (part1.length - avg));
//   part2 = splitted[1];
//   return part1 + "...@" + part2;
// };

// console.log(protect_email("robin_singh@example.com"));



let email = prompt("enter a name ");
let fornt=(email .substring (0,4));
let end = (email.slice("@"));
console.log(fornt+"....."+end)
