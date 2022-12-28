class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    toString() {
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    //sobreescritura de toString
    toString() {
        return `Gerente: ${super.toString()}, departamento: ${this.departamento}`;
    }
}


//polimorfismo - multiples formas, en este caso tenemos multiples formas de llamar un toString
function imprimir(tipo) {

    if (tipo instanceof Gerente) {

        console.log("Es un gerente");//poner la clase con menor gerarquia de primero

    } else if (tipo instanceof Empleado) {
        
        console.log("Es un empleado");

    }

    console.log(tipo.toString());

}

let gerente1 = new Gerente('Carlos', 500000, 'Sistemas');
imprimir(gerente1);

let empleado1 = new Empleado('Jose', 1000);
imprimir(empleado1);