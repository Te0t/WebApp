//Datos de entrada con JS

//Datos Primitivos, son datos basicos para resolver problemas
let nombreUsuario="Harley Taberner"
let edad=33
let hinchaVerde=true
let estatura=1.84
let deuda=-100

//Estructuras de datos multiples
//Arreglos de datos(Array/Vector)
//Un arreglo es una variable especial que almacena varios datos en una sola posicion de memoria
//Todos los arreglos deben guardarse en plural
//en los arreglos todos los datos son del mismo tipo

let numeros=[1,2,3,4,5]
let nombres=["harley","sara","carlos","maria"]
let descuentos=[true,true,false,true]

//sirve para imprimir en pantalla
console.log(numeros)

//sirve para seleccionar la posicion dos del arreglo
console.log(numeros[2])

//los objetos son variables especiales que permiten almacenar varios datos de distinto tipo en una sola variable
//se utiliza las llaves
//un objeto tiene atributos ejemplo

let persona={
    nombre:"harley",
    edad:27,
    hinchaJunior:true,
    estatura:1.84
}

//sirve para seleccionar el atributo del objeto
console.log(persona.nombre)

if(edad>1){
    let nombreUsuario="Lucho Diaz"
}

console.log(nombreUsuario)