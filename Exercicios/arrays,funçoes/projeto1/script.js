const modelos = [
  {
    modelo: "Kombi",
    Motor: true,
    velocidade: 30,
    temperatura: 100,
    bateria: 4,
  },
  {
    modelo: "Bmw",
    Motor: false,
    velocidade: 320,
    temperatura: 200,
    bateria: 10,
  },
  {
    modelo: "Uno",
    Motor: true,
    velocidade: 50,
    temperatura: 4,
    bateria: 50,
  },
];

for (let i = 0; i < modelos.length; i++) {
  const element = modelos[i];

  console.log(`
    === Central do Veiculo ===
    Modelo: ${element.modelo}
    Motor: ${element.Motor ? "ligado" : "Desligado"}
    Velocidade: ${element.velocidade} Km/h
    Temperatura: ${element.temperatura} C
    Bateria: ${element.bateria} V
    Status Motor: ${VerificarMotor(element.Motor)}
    Status Velocidade: ${VerificarVelocidade(element.velocidade)}
    Status Temperatura: ${VerificarTemperatura(element.temperatura)}
    Status Bateria: ${VerificarBateria(element.bateria)}
    `);
}

function VerificarMotor(motor) {
  if (motor) {
    return "Podendo acelerar";
  } else {
    return "Ligar Carro";
  }
}

function VerificarVelocidade(velocidade) {
  if (velocidade <= 10) {
    return "aumentado velocidade";
  } else if (velocidade <= 50) {
    return "velocidade adequado";
  } else if (velocidade <= 100) {
    return "Cuidado com limite";
  } else {
    return "Passou do limite";
  }
}
function VerificarTemperatura(temperatura) {
  if (temperatura > 0 && temperatura <= 80) {
    return "Normal";
  } else if (temperatura >= 81 && temperatura <= 100) {
    return "Elevado";
  } else {
    return "Critica";
  }
}

function VerificarBateria(bateria) {
  if (bateria < 10) {
    return "Otimo mantem";
  } else {
    return "Muito alto";
  }
}


