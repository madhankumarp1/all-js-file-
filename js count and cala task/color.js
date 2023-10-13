// let test = document.querySelector(".btn3")


// const element = document.getElementById("btn3");
// element.addEventListener("click", function() {
//     test.classList.toggle("myStyle")
// });

// const element1 = document.getElementById("btn2");
// element1.addEventListener("click", function() {
 
//     document.getElementById("btn2").classList.toggle("myStyle")
// });

// const element2 = document.getElementById("btn3");
// element2.addEventListener("click", function() {
//     document.getElementById("btn3").classList.toggle("myStyle")
// });

// document.querySelectorAll(".box").forEach(box =>
//     box.addEventListener("click", () => box.classList.toggle("myStyle"))
//   )



const a = document.querySelectorAll(".box");

 for (let i = 0; i < a.length; i++) {
    a[i].flag==false;
     a[i].addEventListener("click", function() {
        if (a[i].flag ==false)
            a[i].classList.toggle("myStyle");
              a[i].innerText="clickd";
     });
 }