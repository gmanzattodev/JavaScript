// Arrow Function


const carro = [
    {
        modelo: "Uno",
        motor: false,
        arrowMotor: (motor) => motor ? true : false
    }
]

const arrow = (moto) => moto * 2

console.log(arrow(2))

const ARRAYS = moto => {
    return moto * 2
}

console.log(ARRAYS(5))