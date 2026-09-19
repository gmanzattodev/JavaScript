const produtos = [
  {
    nome: "Notebook Pro 15",
    descricao: "Notebook de alto desempenho para trabalho e estudos.",
    preco: 5499.9,
    status: "Em estoque",
    categoria: "Eletrônicos todos",
  },
  {
    nome: "Mouse Wireless X",
    descricao: "Mouse sem fio ergonômico com conexão Bluetooth.",
    preco: 149.9,
    status: "Em estoque",
    categoria: "Acessórios",
  },
  {
    nome: "Teclado Mecânico RGB",
    descricao: "Teclado mecânico com iluminação RGB e switches azuis.",
    preco: 329.9,
    status: "Em estoque",
    categoria: "Acessórios",
  },
  {
    nome: "Monitor UltraWide 34",
    descricao: "Monitor ultrawide de 34 polegadas para produtividade.",
    preco: 2199.9,
    status: "Em estoque",
    categoria: "Monitores",
  },
  {
    nome: "Smartphone Galaxy Pro",
    descricao: "Smartphone com câmera avançada e tela AMOLED.",
    preco: 3999.9,
    status: "Em estoque",
    categoria: "Smartphones",
  },
  {
    nome: "Fone Bluetooth Air",
    descricao: "Fone de ouvido sem fio com cancelamento de ruído.",
    preco: 499.9,
    status: "Em estoque",
    categoria: "Áudio",
  },
  {
    nome: "Smartwatch Fit",
    descricao: "Relógio inteligente com monitoramento de atividades.",
    preco: 799.9,
    status: "Em estoque",
    categoria: "Wearables",
  },
  {
    nome: "Câmera Mirrorless X1",
    descricao: "Câmera profissional compacta para fotos e vídeos.",
    preco: 4299.9,
    status: "Fora de estoque",
    categoria: "Câmeras",
  },
  {
    nome: "Tablet Ultra 11",
    descricao: "Tablet de 11 polegadas ideal para estudos e entretenimento.",
    preco: 1899.9,
    status: "Em estoque",
    categoria: "Eletrônicos",
  },
  {
    nome: "Webcam Full HD",
    descricao: "Webcam Full HD com microfone integrado.",
    preco: 279.9,
    status: "Em estoque",
    categoria: "Acessórios",
  },
  {
    nome: "SSD NVMe 1TB",
    descricao: "SSD NVMe de alta velocidade com 1TB de armazenamento.",
    preco: 549.9,
    status: "Em estoque",
    categoria: "Componentes",
  },
  {
    nome: "Memória RAM 16GB",
    descricao: "Memória RAM DDR4 de 16GB para computadores.",
    preco: 299.9,
    status: "Em estoque",
    categoria: "Componentes",
  },
  {
    nome: "Placa de Vídeo RTX",
    descricao: "Placa de vídeo dedicada para jogos e criação de conteúdo.",
    preco: 3499.9,
    status: "Fora de estoque",
    categoria: "Componentes",
  },
  {
    nome: "Cadeira Gamer Pro",
    descricao: "Cadeira ergonômica com apoio lombar ajustável.",
    preco: 1299.9,
    status: "Em estoque",
    categoria: "Móveis",
  },
  {
    nome: "Mesa Office Pro",
    descricao: "Mesa de escritório com acabamento moderno.",
    preco: 899.9,
    status: "Em estoque",
    categoria: "Móveis",
  },
  {
    nome: "Mochila Tech",
    descricao: "Mochila resistente com compartimento para notebook.",
    preco: 249.9,
    status: "Em estoque",
    categoria: "Acessórios",
  },
  {
    nome: "Power Bank 20000mAh",
    descricao: "Bateria portátil de alta capacidade com USB-C.",
    preco: 189.9,
    status: "Em estoque",
    categoria: "Acessórios",
  },
  {
    nome: "Carregador Turbo 65W",
    descricao: "Carregador rápido com tecnologia USB-C Power Delivery.",
    preco: 159.9,
    status: "Em estoque",
    categoria: "Acessórios",
  },
  {
    nome: "Hub USB-C 7 em 1",
    descricao: "Hub multifuncional com HDMI, USB e leitor de cartões.",
    preco: 229.9,
    status: "Em estoque",
    categoria: "Acessórios",
  },
  {
    nome: "Headset Gamer Pro",
    descricao: "Headset gamer com microfone e som surround.",
    preco: 399.9,
    status: "Em estoque",
    categoria: "Áudio",
  },
  {
    nome: "Microfone Condensador",
    descricao: "Microfone profissional para streaming e gravações.",
    preco: 599.9,
    status: "Fora de estoque",
    categoria: "Áudio",
  },
  {
    nome: "Caixa de Som Bluetooth",
    descricao: "Caixa de som portátil com bateria de longa duração.",
    preco: 349.9,
    status: "Em estoque",
    categoria: "Áudio",
  },
  {
    nome: "Console Game X",
    descricao: "Console de última geração para jogos em alta resolução.",
    preco: 4499.9,
    status: "Em estoque",
    categoria: "Games",
  },
  {
    nome: "Controle Wireless",
    descricao: "Controle sem fio compatível com PC e consoles.",
    preco: 299.9,
    status: "Em estoque",
    categoria: "Games",
  },
  {
    nome: "Câmera de Segurança",
    descricao: "Câmera inteligente com visão noturna e Wi-Fi.",
    preco: 259.9,
    status: "Em estoque",
    categoria: "Segurança",
  },
  {
    nome: "Roteador Wi-Fi 6",
    descricao: "Roteador de alta velocidade com tecnologia Wi-Fi 6.",
    preco: 499.9,
    status: "Em estoque",
    categoria: "Redes",
  },
  {
    nome: "Smart TV 55",
    descricao: "Smart TV 55 polegadas com resolução 4K.",
    preco: 2899.9,
    status: "Em estoque",
    categoria: "Televisores",
  },
  {
    nome: "Projetor Full HD",
    descricao: "Projetor Full HD para filmes, apresentações e jogos.",
    preco: 1599.9,
    status: "Fora de estoque",
    categoria: "Eletrônicos",
  },
  {
    nome: "Kindle Reader",
    descricao: "Leitor digital com tela antirreflexo para livros.",
    preco: 599.9,
    status: "Em estoque",
    categoria: "Eletrônicos",
  },
  {
    nome: "Drone 4K Pro",
    descricao: "Drone com câmera 4K e sistema de estabilização.",
    preco: 3299.9,
    status: "Em estoque",
    categoria: "Câmeras",
  },
];

const cards = document.querySelector(".cards");
const buttons = document.querySelectorAll("button");

for (let i = 0; i < produtos.length; i++) {
  const produto = produtos[i];

  cards.innerHTML += `
        <div class="card">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <span>${produto.preco}</span>
            <span>${produto.status}</span>
        </div>
    
    `;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btn = button.dataset.button;

    let produtosFiltrados;

    if(btn === "Todos"){
        produtosFiltrados = produtos
    } else {
        produtosFiltrados = produtos.filter(produto => {
            return produto.categoria === btn
        })
    }

    cards.innerHTML = ""
    for (let i = 0; i < produtosFiltrados.length; i++) {
      const element = produtosFiltrados[i];

      cards.innerHTML += `
        <div class="card">
            <h3>${element.nome}</h3>
            <p>${element.descricao}</p>
            <span>${element.preco}</span>
            <span>${element.status}</span>
        </div>
    
    `;
    }

    console.log(produtosFiltrados);
  });
});
