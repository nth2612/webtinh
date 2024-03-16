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