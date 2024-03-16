var acc = document.getElementsByClassName("question-faqs")
console.log(acc)
var i
for(i = 0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active")
        var answerblock = this.nextElementSibling
        if(answerblock.style.maxHeight){
            answerblock.style.maxHeight = null
        } else{
            answerblock.style.maxHeight = answerblock.scrollHeight + "px"
        }
    })
}