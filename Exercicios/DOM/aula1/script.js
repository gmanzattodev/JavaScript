const paragrafo = document.querySelector("p")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    paragrafo.textContent = "Ligado"
})