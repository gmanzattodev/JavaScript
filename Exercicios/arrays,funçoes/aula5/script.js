const modelos = ["ferrari", "porsche", "Bmw", "Uno", "Mobi"]

const carros = [
    {
        modelo: "ferrari",
        ano: 2010,
        preco: 2000,
        motor: true
    },
    {
        modelo: "BMW",
        ano: 2001,
        preco: 3000,
        motor: true
    },
    {
        modelo: "porsche",
        ano: 1999,
        preco: 5000,
        motor: true
    }
]

for (let i = 0; i < carros.length; i++) {
    const element = carros[i];
   
    console.log(element.motor)
    
    
}


/*
for(let i = 0; i < modelos.length; i++){
    const modelo = modelos[i]

    if(modelo === "Bmw"){
        modelos[2] = "McLaren"
    }
    
}
console.log(modelos)
*/