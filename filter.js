const listLis = document.querySelectorAll(".filter-price li")
const areaChoosed = document.querySelector(".choosed-filter")

listLis.forEach(liE => {
    liE.addEventListener('click', () =>{
        const inE = liE.querySelector("input")
        inE.checked = true
        areaChoosed.innerHTML = ""
        const textLi = liE.innerText
        const aChoosed = document.createElement("a")
        aChoosed.setAttribute("href" , "#")
        aChoosed.setAttribute("onclick", "this.parentNode.removeChild(this)")
        aChoosed.innerText = textLi
        console.log(aChoosed)
        areaChoosed.appendChild(aChoosed)
        const iconIn = document.createElement("i")
        iconIn.classList.add("fa-solid", "fa-xmark")
        aChoosed.insertAdjacentElement("beforeend", iconIn)
    })
})