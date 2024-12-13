const carousel = document.querySelector(".carouselcontainer");
const nextButon = document.querySelector(".carouselbutton--next");
const prevButon = document.querySelector(".carouselbutton--prev");
const premierItem = document.querySelector(".carouselitem");

const scrollAmount = premierItem.clientWidth;

if (carousel) {
   prevButon.addEventListener("click", ()=>{
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" })
   }) 

    nextButon.addEventListener("click", ()=>{
     carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" })
    }) 
 };