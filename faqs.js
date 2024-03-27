// Hỏi đáp

var acc = document.getElementsByClassName("question-faqs")
for(var i = 0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active-faq")
        var answerblock = this.nextElementSibling
        if(answerblock.style.maxHeight){
            answerblock.style.maxHeight = null
        } else{
            answerblock.style.maxHeight = answerblock.scrollHeight + "px"
        }
    })
}