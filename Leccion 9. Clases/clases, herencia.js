class Persona {

    constructor(nombre, apellido, edad) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get getNombre() {

        return this.nombre;

    }

    get getApellido() {

        return this.apellido;

    }

    get getEdad() {
        return this.edad
    }

    set setNombre(nombre) {

        this.nombre = nombre;

    }

    set setApellido(apellido) {

        this.apellido = apellido;

    }

    set setEdad(edad) {
        this.edad = edad;
    }

    nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }

    toString(){
        return this.nombreCompleto() + ', ' + this.edad;
    }

}


class Empleado extends Persona {

    constructor(nombre, apellido, edad, departamento) {
        super(nombre, apellido, edad);//clase padre hereda el elemento nombre y apellido
        this.departamento = departamento;
    }

    get getDepartamento() {
        return this.edad
    }

    set setDepartamento(departamento) {

        this.departamento = departamento;

    }

    //sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this.departamento

    }


}

let persona = new Persona('Jose', 'Hernandez', 43);

for (const i in persona) {
    if (Object.hasOwnProperty.call(persona, i)) {
        const element = persona[i];
        console.log(element);

    }
}

console.log(persona.toString());


let empleado = new Empleado('Maria', 'Gomez', 19, 'Mantenimiento');

for (const i in empleado) {
    if (Object.hasOwnProperty.call(empleado, i)) {
        const element = empleado[i];
        console.log(element);
    }
}

console.log(empleado.toString());
