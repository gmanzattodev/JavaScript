// Guardamos os elementos HTML em constantes.
const botao = document.querySelector("#botaoCor");
const mensagem = document.querySelector("#mensagem");
const h1 = document.querySelector("h1")

// Criamos uma variável que pode mudar.
let temaEscuro = false;

// Adicionamos uma ação ao botão.
botao.addEventListener("click", () => {

    if (temaEscuro === false) {
        h1.textContent = "giocanii"
        document.body.style.backgroundColor = "#1f2937";
        mensagem.textContent = "Agora a página está no modo escuro!";
        temaEscuro = true;
    } else {
        h1.textContent = "volto"
        document.body.style.backgroundColor = "#f2f2f2";
        mensagem.textContent =
            "Clique no botão para transformar a aparência desta página.";
        temaEscuro = false;
    }

});