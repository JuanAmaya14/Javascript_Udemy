//funcion constructor
function Persona(nombre, apellido, telefono) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.nombreCompleto = this.nombre + ' ' + this.apellido;

}

Persona.prototype.usuario = null;

let padre = new Persona('Juan', 'Perez', 'Jperez@gmail.com');
padre.usuario = 'etesesh';
console.log(padre.usuario);

let madre = new Persona('Laura', 'Quintero', 'lau@gmail.com');
console.log(madre.usuario);