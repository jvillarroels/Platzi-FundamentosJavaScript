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

//function imprimirNombreEnMayusculas(persona) {
function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
    //var nombre = persona.nombre.toUpperCase()
    //console.log(persona.nombre.toUpperCase())
}

/*
imprimirNombreEnMayusculas(sacha.nombre)
imprimirNombreEnMayusculas(dario.nombre)
*/
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
//imprimirNombreEnMayusculas({nombre:'Pepito'})
imprimirNombreEnMayusculas({ apellido: 'Gomez' })


