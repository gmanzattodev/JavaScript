const dispositivos = [
  { nome: "Motor", ligado: false, pino: 5, velocidade: 10 },
  { nome: "Farol", ligado: true, pino: 18 },
  { nome: "Sensor", ligado: true, pino: 21 },
];

let pressionado = 0;
while (pressionado < 100) {
  pressionado = pressionado + 10;
}

let BotaoCarroLigar = false;
let freio = false;

if (pressionado > 60) {
  if (!freio && !BotaoCarroLigar) {
    dispositivos[0].ligado = true;
  }
}

if (dispositivos[0].ligado) {
  if (dispositivos[0].velocidade > 80) {
    console.log("Velocidade alta");
  } else if (
    dispositivos[0].velocidade > 0 &&
    dispositivos[0].velocidade <= 80
  ) {
    console.log("Velocidade normal");
  } else {
    console.log("Veiculo parado");
  }
}

/*
  TESTE: SIMULAÇÃO DE PARTIDA E FUNCIONAMENTO DE UM CARRO

  Objetivo:
  Simular a partida de um veículo utilizando condições,
  operadores lógicos e estruturas de decisão.

  Passo a passo:

  1. PEDAL DO FREIO
     - Inicialmente, o freio está como false (não pressionado).
     - Quando o motorista pisa no freio, passa para true.

  2. BOTÃO DE PARTIDA (START/STOP)
     - Inicialmente, o botão está como false.
     - Quando o motorista pressiona o botão, passa para true.

  3. VERIFICAÇÃO PARA LIGAR O MOTOR
     - O sistema verifica se o freio está pressionado
       E se o botão de partida foi acionado.
     - Se as duas condições forem verdadeiras, o motor liga.
     - Caso contrário, o motor permanece desligado.

  4. ESTADO DO MOTOR
     - false: motor desligado.
     - true: motor ligado.
     - Utilizar if/else para verificar o estado do motor.

  5. VERIFICAÇÃO DA VELOCIDADE
     - Se o motor estiver ligado, o sistema verifica
       a velocidade atual do veículo.
     - Utilizar estruturas condicionais para identificar
       se o carro está parado ou em movimento.

  6. CLASSIFICAÇÃO DA VELOCIDADE
     - 0 km/h: veículo parado.
     - 1 a 40 km/h: velocidade baixa.
     - 41 a 80 km/h: velocidade moderada.
     - 81 a 120 km/h: velocidade alta.
     - Acima de 120 km/h: alerta de velocidade elevada.

  Conceitos praticados:
  - Variáveis
  - Booleanos (true/false)
  - Operadores lógicos (&&)
  - Operadores de comparação
  - Estruturas condicionais (if/else)
  - Simulação de estados de um sistema
*/
