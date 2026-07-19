// pegando o elemento body
const body = document.querySelector("body")

// criando um elemento main dentor do body
const main = document.createElement("main")
main.classList.add("main")
body.appendChild(main)

// criando o elemento Header dentro do main
const header = document.createElement("header")
header.classList.add("header")
main.appendChild(header)

header.innerHTML = `
    <div class="image-logo">
        <img src="" alt="logo">
    </div>

    <nav class="navbar">
        <a href="">Inicio</a>
        <a href="">Sobre</a>
        <a href="">Serviço</a>
        <a href="">Depoimento</a>
        <a href="">Contato</a>
    </nav>


    <div class="btn">
        <button>Agendar</button>
    </div>
`

