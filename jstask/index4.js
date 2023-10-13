let number1 =parseInt(prompt("enter mark1 "));

let number2 =parseInt(prompt("enter mark2 "));

let operatar=prompt("enter the name");
switch (operatar){
    case "add":
    result =number1+number2

    break;

     case "sub":
    result =number1-number2

    break;


    default:
        console.log("invild ")

}
if (result|=null)
{
    console.log("result:"+result)
}


// let anime = (prompt("Enter a Anime"))
// let person = null;
// switch (anime) {
//     case "zoro":
//         person = (" Roronoa Zoro, also known as Pirate Hunter Zoro, is a fictional character created by Japanese manga artist Eiichiro Oda who appears in the manga series and media franchise One Piece.");
//         break;

//     case "9tail":
//         person = ("Kurama (九喇嘛), more commonly known as the Nine-Tails (九尾, Kyūbi), was one of the nine tailed beasts. Centuries of being regarded as a mindless monster and sought after as a tool for war caused Kurama to hate humans. After being sealed into Naruto Uzumaki, Kurama attempts to maintain its cynical perspective about the world, but with Naruto's insistence on treating it with respect, the fox overturns its hatred and willingly strives to use its power for the world's salvation.");
//         break;

//     case "l":
//         person = ("L Lawliet (Japanese: エル・ローライト, Hepburn: Eru Rōraito),[1] known mononymously as L, is the main antagonist of the manga series Death Note, created by Tsugumi Ohba and Takeshi Obata. He is an enigmatic, mysterious, and highly-esteemed international consulting detective whose true identity and background is kept a secret. He communicates with law enforcement agencies only through his equally inexplicable handler/assistant, Watari, who serves as his official liaison with the authorities. Though his past is shrouded in mystery, he has gained a reputation as arguably the world's greatest detective/criminal profiler.");
//         break;


//     default:
//         console.log("Just I Like It ")
// }
// if (person != null) {

//     console.log("My Favorite : " + person);
//     alert(person)
// }






// let marks=parseInt(prompt("enter marks:"));
// if(marks> 0 && marks <=100){
//   if (marks>=90 && marks <=100)
//   {
//       console.log("a gread");
//   }
//   else if(marks >=80 && marks<70)
//   {
//       console.log("b gread");
//   }
//   else if (marks >=70 && marks<50)
//   {
//       console.log(" c gread");
//   }
//   else{
//     console.log("faild");
//   }
// }
// else{
//     console.log("invalid value");
// }



// Odd or Even

// let number=parseInt(prompt("Enter a Number:"));

// if (number % 2==0 ){
//     alert("Even Number :"+number)
// }
// else{
//     alert("Odd Number :"+number)
// }


// number and word

// let tex=prompt("Enter a Text or Number:");


// if (isNaN(tex)){
//     alert("Is a Word : "+tex)

// }
// else 
// {
//     alert("Is a Number : "+tex)

// }


// largestnumber

// let a=parseInt(prompt("enter a number 1 "));
// let b=parseInt(prompt("enter a number 2 "));

// if (a >= b){
//     alert("greater Number  : "+ a)

// }
// else{
//     alert(" greater Number : "+ b)
// }



// largest 3 number

// let larg=parseInt(prompt("enter a number 1 "));
// let les=parseInt(prompt("enter a number 2 "));
// let les2=parseInt(prompt("enter a number 3 "));

// if (larg >  les){
//     alert("Small Number  : "+ larg)

// }else if (les >= les2){
//     alert("greater  Number : "+  les)
// }
// else{
//      alert("greater  Number : "+  les2,larg)
// }


// ==========================

// let a = parseInt(prompt("enter a number 1:"));
// let b = parseInt(prompt("enter a number 2:"));
// let c = parseInt(prompt("enter a  number 3:"));
// if (a == b && a == c) {
//     alert("All Number equal")
// }
// // else if(isNaN) {
// //    alert ("it not a number ")
// // }
// else if ((a == b)||(c == b)||(a == c)){


//     if ((a > c) && (a == b)) {
//         alert("A and B equal and it is biggest than C");
//     }
//     else if ((a < c) && (b == a)) {
//         alert("A and B  equal and C is biggest ");

//     }


//     else if ((b > a) && (c == b)) {
//         alert("B and c  equal and it is biggest than A ");
//     } 
//     else if ((b <a) && (b == c)) {
//         alert("B and c  equal and A is biggest");
//     }


//     else if ((c > b) && (c == a)) {
//         alert("A and c  equal and it is biggest than B ");
//     }
//     else {
//         alert("A and c  equal and  B is biggest ");

//     }
// }
// else {
//     if (a > b && a > c) {
//         console.log("A is biggest number");

//     }
//     else if (b > c) {
//         console.log("B is biggest number")

//     }
//     else {
//         console.log("C is biggest number")

//     }
// }



// let star=parseInt(prompt("enter a star "));
// let end=parseInt(prompt("enter a end "));
// let num=parseInt(prompt("enter a number "));

// let test=(star>0 && star<end );
// if (test){

//      if  ( num>=star && num<=end ){
//         alert("Between the range")
//       }
//       else{
//           alert("Outside the range")
//       }
// }
// else {

//      if  ( num<=star && num>=end ){
//         alert("Between the range ")
//       }
//       else{
//           alert("Outside the range")
//       }
// }





// lepppyear


// let num=parseInt(prompt("Enter a Year"))

// if((num%4==0) && !(num%100==0) || (num%400==0)) {
//     alert("is a leap year ")
// }
// else{
//     alert("is not  leap year ")
// }



// swap ---------------------------

let a=parseInt(prompt("Enter A "))

let b=parseInt(prompt("Enter B"))

temp = a;
a = b;
b = temp;

// c=a+b
// a=c-a
// b=c-b

console.log("a : "+a)
console .log("b : "+b)
// let x= b=a ;
// alert ("b=="+b)