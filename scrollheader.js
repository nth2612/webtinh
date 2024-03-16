const headerfloat = document.getElementById("header-float")
const header = document.getElementById("header")
const headerHeight = header.offsetHeight
window.addEventListener("scroll" , function() {
    if(window.pageYOffset > headerHeight){
        headerfloat.classList.add("active-float")
    }
    else{
        headerfloat.classList.remove("active-float")
    }
})