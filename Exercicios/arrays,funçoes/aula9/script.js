const sensores = [
    {
        nome: "temperatura",
        valor: 20,
        limite: 200
    },
    {
        nome: "motor",
        valor: 10,
        limite: 210
    },
    {
        nome: "bateria",
        valor: 50,
        limite: 100
    },
    {
        nome: "velocidade",
        valor: 10,
        limite: 500
    },
    {
        nome: "pneus",
        valor: 5,
        limite: 50
    },

]

for (let i = 0; i < sensores.length; i++) {
    const element = sensores[i];
    
    console.log(`
        nome: ${element.nome}
        valor: ${element.valor}
        limite: ${element.limite}
        total de limite e valor: ${element.valor + element.limite}
        `)

    console.log(i, sensores.length)
    sensores.push({
        nome: "bmw",
        valor: 2000,
        limite: 5000
    })
    if(i === 5){
        break
    }
}

