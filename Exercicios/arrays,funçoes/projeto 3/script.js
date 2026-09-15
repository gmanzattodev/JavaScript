const veiculos = [
  {
    placa: "ABC-1234",
    modelo: "Fiat Uno",
    ano: 2012,
    motorLigado: true,
    velocidade: 80,
    temperatura: 92,
    combustivel: 35,
    valorServico: 250,
    status: "manutencao",
  },
  {
    placa: "DEF-5678",
    modelo: "BMW 320i",
    ano: 2020,
    motorLigado: false,
    velocidade: 0,
    temperatura: 70,
    combustivel: 80,
    valorServico: 800,
    status: "finalizado",
  },
  {
    placa: "GHI-9012",
    modelo: "Volkswagen Gol",
    ano: 2015,
    motorLigado: true,
    velocidade: 120,
    temperatura: 105,
    combustivel: 15,
    valorServico: 400,
    status: "manutencao",
  },
  {
    placa: "JKL-3456",
    modelo: "Toyota Corolla",
    ano: 2022,
    motorLigado: true,
    velocidade: 60,
    temperatura: 95,
    combustivel: 60,
    valorServico: 650,
    status: "finalizado",
  },
  {
    placa: "MNO-7890",
    modelo: "Chevrolet Onix",
    ano: 2019,
    motorLigado: false,
    velocidade: 0,
    temperatura: 75,
    combustivel: 5,
    valorServico: 300,
    status: "aguardando",
  },
];
const faturamento = veiculos.reduce((total, valor) => {
    return total + valor.valorServico
},0);


for (let i = 0; i < veiculos.length; i++) {
  const element = veiculos[i];

  console.log(`
        =============================
        VEICULO: ${element.modelo}
        Placa: ${element.placa}
        =============================

        Motor: ${motor(element.motorLigado)}
        Temperatura: ${temperatura(element.temperatura)}
        Velocidade: ${velocidade(element.velocidade)}
        Status: ${estado(element.status)}
        `);
    
}





function motor(motor) {
  if (motor) {
    return "Motor Ligado";
  } else {
    return "Motor Desligado";
  }
}
function temperatura(temperatura) {
  if (temperatura <= 80) {
    return "Normal";
  } else if (temperatura <= 100) {
    return "Elevada";
  } else {
    return "Critica"
  }
}
function velocidade(velocidade){
    if(velocidade === 0){
        return "Parado"
    } else if(velocidade <= 60){
        return "Velocidade lenta"
    } else if(velocidade <= 100){
        return "Velocidade Normal"
    } else {
        return "Alta velocidade"
    }
}

function estado(status){
    switch(status){
        case "aguardando":
            return "Veiculo na espera"
        case "finalizado":
            return "Veiculo Finalizado"
        case "manutencao":
            return "Veiculo em Manutencao"
    }
}
console.log(`
        Central de Veiculos

        Total de veiculos: ${veiculos.length}
        Veiculos em Manutencao: ${veiculos.filter((filtrado) => filtrado.status === "manutencao").length}
        Veiculos Finalizados: ${veiculos.filter((filtrado) => filtrado.status === "finalizado").map((mostrar) => mostrar.modelo).join(` - `)}
        Faturamento Total: R$ ${veiculos.reduce((total, valor) => {return total + valor.valorServico}, 0)}
        Faturamento dos serviços finalizados: R$ ${veiculos.filter((filtrado) => filtrado.status === "finalizado").reduce((total, valor) => { return total + valor.valorServico}, 0)}
        Todos possuem combustivel: ${veiculos.filter((combustivel) => combustivel > 0) ? "SIM" : "NAO" }
        `)