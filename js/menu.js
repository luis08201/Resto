let menuToggle = document.getElementById("menuToggle");
let nav = document.getElementById("nav");

menuToggle.addEventListener("click", () =>{
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
});


