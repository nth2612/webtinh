// Hiển thị thanh nav fixed
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

// Quay lại đầu trang
const aback = document.getElementById("scroll-to-top")

window.addEventListener("scroll" , function() {
    if(window.pageYOffset > 300){
        aback.style.opacity = 1
    }
    else{
        aback.style.opacity = 0
    }
})

// Modal đăng nhập đăng ký
var modallogin = document.querySelector(".modal-login")
var modalsignup = document.querySelector(".modal-signup")
var modal = document.querySelector(".modalinup")
var modalbtn = document.querySelector(".hienthimodal")
function hienlogin(){
    modal.style.display = "flex"
    modalsignup.classList.remove("active-modal")
    modallogin.classList.add("active-modal")
}
function hiensignup(){
    modal.style.display = "flex"
    modallogin.classList.remove("active-modal")
    modalsignup.classList.add("active-modal")
}
function anmodal(){
    modal.style.display = "none"
    modalsignup.classList.remove("active-modal")
    modallogin.classList.remove("active-modal")
}
modal.addEventListener('click', anmodal)

modallogin.addEventListener("click", function(event){
    event.stopPropagation();
})
modalsignup.addEventListener("click", function(event){
    event.stopPropagation();
})