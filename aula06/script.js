const root = document.querySelector(".root")
const texto = document.querySelector(".texto")
const pass = document.querySelector(".pass")
const btn = document.querySelector(".btn")
const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if(!texto.value || !pass.value){
        alert("digite no campo de texto para entrare")
        return
    }
    if(texto.value.length >= 30){
        alert("passou o numero de contato")
        return
    }

    const nome = document.createElement("div")
    nome.classList.add("nome")

    const senha = document.createElement("div")
    senha.classList.add("senha")

    nome.textContent = texto.value
    senha.textContent = pass.value

    

    root.appendChild(nome)
    root.appendChild(senha)
    texto.value = ""
    pass.value = ""
})


