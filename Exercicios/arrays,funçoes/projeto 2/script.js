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

const faturamento = atendimentos.reduce((total, valor) => {
  return total + valor.valor;
}, 0);

const clientes = atendimentos.map((cliente) => {
  return cliente.cliente;
}).join(`
    `);

const cortes = atendimentos
  .filter((corte) => {
    return corte.servico === "Corte";
  })
  .map((corte) => {
    return corte.cliente;
  }).join(`
    `);

const horarioOcupado = atendimentos.find((horario) => {
  return horario.horario === "13:00";
});

const horarioDisponivel = atendimentos.find((horario) => {
  return horario.horario === "15:00";
});
function horario() {
  if (horarioDisponivel) {
    return "Ocupado";
  } else {
    return "Disponível";
  }
}
horario()

console.log(`
    ==== FECHAMENTO DE LOJA ====

    Faturamento: R$ ${faturamento}
    
    Clientes:
    ${clientes}

    Atendimento de Cortes:
    ${cortes}

    Horario 13:00:
    ${horarioOcupado.cliente}

    Horario 15:00:
    ${horario()}
    `);
