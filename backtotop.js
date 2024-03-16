const aback = document.getElementById("scroll-to-top")

window.addEventListener("scroll" , function() {
    if(window.pageYOffset > 300){
        aback.style.opacity = 1
    }
    else{
        aback.style.opacity = 0
    }
})