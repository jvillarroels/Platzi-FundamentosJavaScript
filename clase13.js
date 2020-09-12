var sacha = {
    nombre: 'Sacha', 
    apellido: 'Lifszyc',
    edad: 28,
    peso: 75
}

console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} Kgs`)

// function  aumentarDePeso (persona) {
//     return persona.peso += 200
// } 

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO
const adelgazar = (persona) => persona.peso -= INCREMENTO_PESO

for (let i = 1; i <= DIAS_DEL_ANO; i++) {
    let random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(sacha)

    } else if (random < 0.5) {
        adelgazar(sacha)
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(2)} Kgs`)


