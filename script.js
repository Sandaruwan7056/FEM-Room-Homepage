const slides=document.querySelectorAll('.images img');

let slideIndex = 0;

initializeSlider();

function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide");

}
function showSlide(index){
if (index >= slides.length) {
    slideIndex =0
} else if(index < 0){
    slideIndex = slides.length -1;
}

        slides.forEach(slide => {
            slide.classList.remove("displaySlide")
        });
        slides[slideIndex].classList.add("displaySlide")
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}


//navbar

const navbar =document.getElementById("nav");

function openNav(){
    navbar.classList.add('toggleNav');
}
function closeNav(){
    navbar.classList.remove('toggleNav');
}