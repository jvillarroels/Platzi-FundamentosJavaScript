var sacha = {
    nombre: 'Sacha', 
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false, 
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gómez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.dj) {
        console.log('Dj')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.drone) {
        console.log('Piloto de drone')
    }
}

const MAYORIA_DE_EDAD = 18

/*
var esMayorDeEdad = function(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/
/*
var esMayorDeEdad = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}
*/
// ARROW FUNCTIONS
//const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es MAYOR de edad, tiene ${persona.edad} años`)
    } else {
        console.log(`${persona.nombre} es MENOR de edad, tiene ${persona.edad} años`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    }else {
        console.log('ACCESO CONCEDIDO')
    }

}

// imprimirProfesiones(sacha)
// imprimirSiEsMayorDeEdad(sacha)
// imprimirSiEsMayorDeEdad(juan)
