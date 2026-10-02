//ABRIR E FECHAR MODAL //
const novatarefa = document.getElementById("novatarefa");
const modal = document.querySelector(".modal");
const fechar = document.querySelector(".fechar");
const cancelar = document.querySelector(".cancelar");
novatarefa.addEventListener("click", () => {
  modal.classList.add("active");
  gsap.from(modal, {
    y: 100,
    opacity: 0,
    duration: 1,
  });
});
fechar.addEventListener("click", () => {
  modal.classList.remove("active");
});
cancelar.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Formularios //
const formulario = document.querySelector(".modal form");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
});



