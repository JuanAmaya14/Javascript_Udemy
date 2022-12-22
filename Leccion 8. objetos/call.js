let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function (titulo, telefono) {
        //return this.nombre + ' ' + this.apellido;
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + telefono;
    }


}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',


}
/* Uso de call para usar
el metodo persona1.nombreCompleto con los datos de persona2 */

console.log(persona1.nombreCompleto('Diseñador', '546546788'));

console.log(persona1.nombreCompleto.call(persona2, 'Ingeniero', '24324234'));


//apply
let arreglo = ['Ingeniero','2354456587']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
