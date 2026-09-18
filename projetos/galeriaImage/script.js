const cards = document.querySelectorAll(".card")
const proximo = document.querySelector(".proximo")
const anterior = document.querySelector(".anterior")

let image = 0

proximo.addEventListener("click", () => {
    
    cards[image].classList.remove("active")

    image++

    if(image >= cards.length){
        image = 0
    }

    cards[image].classList.add("active")
})

anterior.addEventListener("click", () => {
    
    cards[image].classList.remove("active")

    image--

    if(image < 0){
        image = cards.length - 1
    }

    cards[image].classList.add("active")
})
