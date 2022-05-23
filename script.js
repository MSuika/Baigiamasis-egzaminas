"use strict"

var burger = document.querySelector("i")
var sideNav = document.querySelector(".mobile-navigation")

burger.addEventListener("click", function(){
    this.classList.toggle("rotateZ")
    sideNav.classList.toggle("translateX")
})

window.addEventListener("resize", function(){
    if(window.innerWidth > 600){
        burger.classList.remove("rotateZ")
        sideNav.classList.remove("translateX")
    }
    console.log(window.innerWidth)
})

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }