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

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18) {
        console.log(`Sacha es MAYOR de edad, tiene ${persona.edad} años`)
    } else {
        console.log(`Sacha es MENOR de edad, tiene ${persona.edad} años`)
    }
}

imprimirProfesiones(sacha)
imprimirSiEsMayorDeEdad(sacha)
