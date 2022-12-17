//String
var nombre = "Carlos";

console.log(nombre, typeof nombre);


//int
var number = 1000;

console.log(number, typeof number);


//object
var objeto = { nombre: "Juan", apellido: "Perez", telefono: "324234" };

console.log(objeto, typeof objeto);


//Boolean (true, false)

var bool = true

console.log(bool, typeof bool)

//function
function miFuncion(){}
console.log(miFuncion, typeof miFuncion);

//Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo, typeof simbolo);

//class (function)
class Persona{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

}
console.log(Persona, typeof Persona);

//undefined
var x;
//var x = undefined;
console.log(x, typeof x);

//null
var y = null;
console.log(y, typeof y);

