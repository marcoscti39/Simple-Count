
let btns = document.querySelectorAll("button")
let number = document.querySelector(".number")

let counter = 0

btns.forEach((btn) =>{
    btn.addEventListener("click", (e) =>{
        let style = e.currentTarget.classList
        if(style.contains("btn-increase")){
            counter ++
        } else if (style.contains("btn-decrease")){
            counter --
        }
        else {
            counter = 0
        }
        if(counter < 0){
            number.style.color = "red"
        } else if (counter > 0){
            number.style.color = "green"
        } else {
            number.style.color = "black"
        }

        number.textContent = counter
    })
})









