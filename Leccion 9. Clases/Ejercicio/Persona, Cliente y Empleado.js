/* ----------PERSONA---------- */
class Persona {

    static contadorPersona = 0;

    static get MAX_PERSONAS() {
        return 5;
    }

    constructor(nombre, apellido, edad) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        if (Persona.contadorPersona < Persona.MAX_PERSONAS) {

            this.idPersona = ++Persona.contadorPersona;
        }else{
            
            console.log("Limite de personas alcanzado");
        }

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
        return this.edad;
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

}

/* ----------EMPLEADO---------- */

class Empleado extends Persona {

    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.idEmpleado = ++Empleado.contadorEmpleado;
    }

    get getIdEmpleado() {
        return this.idEmpleado;
    }

    get getSueldo() {
        return this.sueldo;
    }

    set setSueldo(sueldo) {
        this.sueldo = sueldo;
    }

    toString() {
        return "Empleado " + this.idEmpleado + "{" +
            "nombre= '" + this.nombre + '\'' +
            ", apellido= '" + this.apellido + '\'' +
            ", edad= '" + this.edad + '\'' +
            ", sueldo= '" + this.sueldo + '\'' +
            '}';
    }

}

/* ----------CLIENTE---------- */

class Cliente extends Persona {

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this.fechaRegistro = fechaRegistro;
        this.idCliente = ++Cliente.contadorCliente;
    }

    get getIdCliente() {
        return this.idCliente;
    }

    get getFechaRegistro() {
        return this.fechaRegistro;
    }

    set setFechaRegistro(fechaRegistro) {
        this.fechaRegistro = fechaRegistro;
    }

    toString() {
        return "Cliente " + this.idCliente + "{" +
            "nombre= '" + this.nombre + '\'' +
            ", apellido= '" + this.apellido + '\'' +
            ", edad= '" + this.edad + '\'' +
            ", fechaRegistro= '" + this.fechaRegistro + '\'' +
            '}';
    }

}

/* ----------TEST---------- */

(function () {

    //personas
    let persona1 = new Persona("Jose", "Alvarez", 43);

    let persona2 = new Persona("Juan", "Gomez", 33);

    let persona3 = new Persona("Andrea", "Perez", 23);

    let persona4 = new Persona("Mateo", "Heredia", 43);

    let persona5 = new Persona("Natalia", "Leal", 18);

    let persona6 = new Persona("Alejandro", "Baez", 23);

    console.log(persona6.toString());


    //empleados
    let empleado1 = new Empleado("Myriam", "Luengo", 21, 2300);

    let empleado2 = new Empleado("Markel", "Reina", 49, 30000);

    let empleado3 = new Empleado("Vicent", "Herranz", 31, 4000);

    //console.log(empleado3.toString());

    //clientes
    let cliente1 = new Cliente("Ariadna", "Acuña", 43, new Date());

    let cliente2 = new Cliente("Ibon", "Costas", 19, new Date('August 19, 2015 23:15:30'));

    let cliente3 = new Cliente("Paul", "Hinojosa", 20, new Date('September 21, 2018 12:15:00'));

    //console.log(cliente3.toString());

})();