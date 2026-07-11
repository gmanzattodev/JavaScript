let maioridade = false;
let idade = 19;

const nomes = [
  { nome: "giovani" },
  { nome: "mateus" },
  { nome: "guilherme" },
  { nome: "lucas" },
];

function buscar(nome){
    const resultado = nomes.map(element => {
        element.push({
            nome: nome
        })
    })
    return resultado
}
console.log(buscar("giovanik"))
