let slideIndex = 0
let slides = document.querySelectorAll(".mySlides")
let dots = document.querySelectorAll(".dot")
let intervalID = null
initialSlide()
function initialSlide(){
    slides[slideIndex].classList.add("hienthi")
    dots[slideIndex].classList.add("dot-active")
}
function showSlide(index){
    if(index > slides.length - 1) {slideIndex = 0}
    if(index < 0) {slideIndex = slides.length - 1}

    slides.forEach(slide => slide.classList.remove("hienthi"))
    dots.forEach(dot => dot.classList.remove("dot-active"))
    slides[slideIndex].classList.add("hienthi")
    dots[slideIndex].classList.add("dot-active")
}

function plusSlides(n){
    showSlide(slideIndex += n)
}

function currentSlide(n){
    showSlide(slideIndex = n)
}