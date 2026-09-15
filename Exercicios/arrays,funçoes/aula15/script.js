const atendimentos = [
  {
    cliente: "João",
    horario: "09:00",
    servico: "Corte",
    valor: 30,
  },
  {
    cliente: "Carlos",
    horario: "10:00",
    servico: "Barba",
    valor: 20,
  },
  {
    cliente: "Marcos",
    horario: "11:00",
    servico: "Corte + Barba",
    valor: 50,
  },
  {
    cliente: "Pedro",
    horario: "13:00",
    servico: "Corte",
    valor: 30,
  },
  {
    cliente: "Lucas",
    horario: "14:00",
    servico: "Corte + Barba",
    valor: 50,
  },
];

const possuiAtendimentoCaro = atendimentos.some((atendimento) => {
  return atendimento.valor >= 50;
});

if (possuiAtendimentoCaro) {
  console.log("Existe atendimento acima de R$ 40");
} else {
  console.log("Nao existe atendimento acima de R$ 40");
}
