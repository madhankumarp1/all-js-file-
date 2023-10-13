// let studentobj={
//     name:"madhan",age:"25",dob:"2003:03:16"
// }
// console.log(studentobj)
// console.log(studentobj.age) 


let laptop3 ={
    name:"Dell",
    id:231,
    price:75000,
    ram:"32Gb"
}
console.log(laptop3)




// assess Object 

console.log(laptop3.price)

laptop3.price=7000;

console.log(laptop3["price"])


let laptop2 ={
    0:23,
    1:24,
    2:25,
}
console.log(laptop2[2])


let laptop = {
    categories:[" HP"," Dell","mac","lenove","Ausu"],
    processor: ["i3","i5","i9"],
    storage:["250Gb","500Gb","1Tb"],
    ram:["8Gb","16Gb"],
    Addres:{
        location:{
            district:["vellor","chenni","Trichy",["Hp discount","Dell discount","mac discount"]],
            Vellore:" Katpadi, Vellore, Tamil Nadu",
            Chennai:"Chennai, Tamil Nadu",
            Trichy: "Trichy, Tamil Nadu"
        }
    }     
}


console.log(laptop.categories[0],laptop.processor[0],laptop.storage[0],laptop.ram[1],
    laptop.Addres.location.Vellore,laptop.Addres.location.district[3][1])