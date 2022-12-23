class Usuario {


    static contadorPersonas = 0;

    constructor(nombre, apellido, edad) {

        this.idPersona = ++Usuario.contadorPersonas;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }

    get getIdPersona() {
        return this.idPersona;
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

    toString() {
        return "Persona " + this.idPersona + "{" +
            "nombre= '" + this.nombre + '\'' +
            ", apellido= '" + this.apellido + '\'' +
            ", edad= '" + this.edad + '\'' +
            '}';
    }

    //static numero = 5; //variable estatica
    //hola = 'ola';//variable no estatica

}


class Empleado extends Usuario {

    static contadorPersonas = 0;

    constructor(idPersona, nombre, apellido, edad, departamento) {
        super(idPersona, nombre, apellido, edad);//clase padre hereda el elemento nombre y apellido
        this.departamento = departamento;
        this.idPersona = ++Empleado.contadorPersonas;
    }

    get getDepartamento() {
        return this.edad
    }

    set setDepartamento(departamento) {

        this.departamento = departamento;

    }

    //sobreescritura
    toString() {
        return "Empleado " + this.idPersona + "{" +
            "nombre= '" + this.nombre + '\'' +
            ", apellido= '" + this.apellido + '\'' +
            ", edad= '" + this.edad  + '\'' +
            ", departamento= '" + this.departamento + '\'' +
            '}';
    }


}

let persona = new Usuario('Jose', 'Hernandez', 43);

console.log(persona.toString());

let persona1 = new Usuario('Juan', 'Gomez', 23);

console.log(persona1.toString());


let empleado = new Empleado('Maria', 'Gomez', 19, 'Mantenimiento');

console.log(empleado.toString());

let empleado1 = new Empleado('Andrea', 'salazar', 39, 'Planta');

console.log(empleado1.toString());


/*Para llamar a una variable o metodo estatico hay que poner
primero el nombre de la clase, ya que si ponemos el nombre del objeto
este lo tomara como indefinido*/
//console.log(Persona.numero);

//console.log(persona.hola);
