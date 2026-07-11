const img = document.querySelector(".root");

const imagens = [
    "./img.png",
    "./img2.png",
    "./img3.png"
];

let atual = 0;

setInterval(() => {
    atual++;

    if (atual >= imagens.length) {
        atual = 0;
    }

    img.src = imagens[atual];

}, 1000);