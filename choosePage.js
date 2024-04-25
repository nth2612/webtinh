var thePages = document.getElementsByClassName("page-num")
console.log(thePages);
var pageArray = Array.from(thePages)
pageArray.forEach(function(thePage){
    thePage.onclick = function(){
        var pageActive = document.querySelector(".active-page")
        pageActive.classList.remove("active-page")
        thePage.classList.add("active-page")
    }
})