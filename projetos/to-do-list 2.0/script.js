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
const pendentes = document.querySelector(".pendentes");
const hoje = document.querySelector(".hoje");
const concluidas = document.querySelector(".concluida");
const textInput = document.getElementById("ititulo");
const descricao = document.getElementById("descricao");
const buttonsPrioridades = document.querySelectorAll(".escolha button");
const data = document.querySelector("#data");
const opcaoCategorias = document.querySelector("#opcao");
let prioridadeSelecionada = "";

buttonsPrioridades.forEach((button) => {
  button.addEventListener("click", () => {
    prioridadeSelecionada = button.value;
  });
});
const coresCategorias = {
  Estudos: "#09ff00",
  Trabalho: "#f5312a",
  Saude: "#ff7b00",
  Pessoal: "#7b00ff",
};
const coresPrioridades = {
  Alta: "#ff0000",
  Media: "#fbff00",
  Baixa: "#00fc60"
};

const backgroundPrioridades = {
  Alta: "#ff000060",
  Media: "#ffe60067",
  Baixa: "#00ff5991"
};

const tarefas = [];

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const text = textInput.value;
  const desc = descricao.value;
  const dataValor = data.value;
  const categorias = opcaoCategorias.value;

  tarefas.push({
    titulo: text,
    descricao: desc,
    prioridade: prioridadeSelecionada,
    data: dataValor,
    categoria: categorias,
    color: coresCategorias[categorias] || "#E5E7EB",
    colorPrioridade: coresPrioridades[prioridadeSelecionada] || "#E5E7EB",
    backgroundPrioridade: backgroundPrioridades[prioridadeSelecionada] || "#E5E7EB",
  });

  console.log(tarefas);

  textInput.value = "";
  descricao.value = "";
  data.value = "";
  opcaoCategorias.value = "";
  prioridadeSelecionada = "";

  pendentes.innerHTML = tarefas.length;
  renderizarTarefas();
  modal.classList.remove("active");
});

const lista_tarefas = document.querySelector(".secao-fazer");

function renderizarTarefas() {
  lista_tarefas.innerHTML = tarefas
    .map((add) => {
      return `
<div class="tarefa">
  <input type="checkbox" name="" class="input-check" id="check">
  <div class="info">
    <span style="color: ${add.color}">${add.categoria}</span>
    <h4>${add.titulo}</h4>
    <p>${add.descricao}</p>
    <div class="infoValor">
      <h3 style="color: ${add.colorPrioridade}; background-color: ${add.backgroundPrioridade}">${add.prioridade}</h3>
      <p>${add.data}</p>
    </div>
  </div>
</div>
  
  `;
    })
    .join("");
}

const input_check = document.querySelector(".input-check")


input_check.addEventListener("click", () => {
  tarefas
})