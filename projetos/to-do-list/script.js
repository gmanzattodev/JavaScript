const text = document.querySelector("#name");
const descript = document.querySelector("#descript");
const button = document.querySelector(".button");
const lista = document.querySelector(".lista");
const prontos = document.querySelector(".prontos");
const limpar = document.querySelector(".limpar");
const btn = document.querySelector(".btn");
const list_info = document.querySelector(".list-info");

button.addEventListener("click", () => {
  const valorTexto = text.value;
  const ValorDescript = descript.value;
  if(valorTexto == "" && ValorDescript == ""){
    listInfo.innerHTML = ""
  }

  // cria a LIST dessa tarefa
  const listas = document.createElement("div");
  listas.classList.add("list");

  // cria o conteúdo dessa tarefa
  const listInfo = document.createElement("div");
  listInfo.classList.add("list-info");

  const h4 = document.createElement("h4");
  h4.classList.add("titulo");
  h4.textContent = valorTexto;

  const p = document.createElement("p");
  p.classList.add("descricao");
  p.textContent = ValorDescript;

  // cria área do botão
  const btn = document.createElement("div");
  btn.classList.add("btn");

  const concluido = document.createElement("button");
  concluido.classList.add("concluido");
  concluido.textContent = "Concluir";

  // monta a tarefa
  listInfo.appendChild(h4);
  listInfo.appendChild(p);

  btn.appendChild(concluido);

  listas.appendChild(listInfo);
  listas.appendChild(btn);

  // coloca a tarefa na lista
  lista.appendChild(listas);

  text.value = "";
  descript.value = "";

  // botão concluir
  concluido.addEventListener("click", () => {
    concluido.style.display = "none";
    prontos.appendChild(listas);
  });
  
});
limpar.addEventListener("click", () => {prontos.innerHTML = ""});
