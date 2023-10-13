let x =prompt("Enter a User 1 ");
let y =prompt("Enter a User 2");



let a = x .toLowerCase();
console.log("input 1"+a)
let b = y .toLowerCase();
console.log("input 2"+b)



if (a=="paper" && b=="storn"){
    alert ("paper is win")
} 
else if (a=="storn" && b=="paper") {
    alert("paper is win")
}
else if (a=="scissors" && b=="storn"){
    alert("Storn is win")
}
else if (a=="storn" && b=="scissors"){
    alert("Stron is win")
}
else if (a=="scissors" && b=="paper"){
    alert("scissors is win")
}
else if (a=="paper" && b=="scissors" ){
    alert("scissors is win")
}
else if (a=="scissors" && b=="scissors"){
    alert("tied")
}
else if (a=="paper" && b=="paper"){
    alert("tied")
}
else if (a=="storn" && b=="storn"){
    alert("tied")
}