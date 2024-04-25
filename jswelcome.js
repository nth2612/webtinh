var modalwelcome = document.querySelector(".welcome-modal")
var modalbo = document.querySelector(".first-modal")
function anmodalwelcome(){
    modalbo.style.display = "none"
}
modalbo.addEventListener('click', anmodalwelcome)

modalwelcome.addEventListener("click", function(event){
    event.stopPropagation();
})