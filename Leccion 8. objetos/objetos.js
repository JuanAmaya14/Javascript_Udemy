let persona = {

    nombre: 'Juan',
    apellido: 'Gonzales',
    edad: '28',
    email: 'juangonza@gmail.com',
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }

}

console.log(persona);

console.log(persona.nombreCompleto);

//Objeto de nmanera dinamica
let persona2 = new Object();
persona2.nombre = 'carlos';
persona2.apellido = 'Carrillo';
persona2.usuario = 'Carllo123';
persona2.telefono = '143254367';

console.log(persona2);

//for in para acceder a los objetos
for (const key in persona2) {
    if (Object.hasOwnProperty.call(persona2, key)) {
        const element = persona2[key];
        console.log(element);

    }
}

//borrar una propiedad
// delete persona2.usuario;

// console.log(persona2);

//imprimir como un JSON
let persona2String = JSON.stringify(persona2);
console.log(persona2String);
