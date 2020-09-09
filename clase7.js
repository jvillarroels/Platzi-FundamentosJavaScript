var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}

var dario = {
    nombre: 'Dario',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas(persona) {
    // vara nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)


