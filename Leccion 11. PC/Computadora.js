/*-----Dispositivo Entrada-----*/
class DispositivoEntrada {

    constructor(tipoEntrada, marca) {
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get getTipoEntrada() {
        return this.tipoEntrada;
    }

    get getMarca() {
        return this.marca;
    }

    set setTipoEntrada(tipoEntrada) {
        this.tipoEntrada = tipoEntrada;
    }

    set setMarca(marca) {
        this.marca = marca;
    }

}

/*-----Monitor-----*/
class Monitor {

    static contadorMonitores = 0;

    constructor(marca, tamano) {

        this.idMonitor = ++Monitor.contadorMonitores;
        this.marca = marca;
        this.tamano = tamano;

    }

    get getIdMonitor() {
        return this.idMonitor;
    }

    get getMarca() {
        return this.marca;
    }

    get getTamano() {
        return this.tamano;
    }

    set setMarca(marca) {
        this.marca = marca;;
    }

    set setTamano(tamano) {
        this.tamano = tamano;
    }

    toString() {

        return `Monitor ${this.idMonitor} {Marca: ${this.marca}, Tamaño: ${this.tamano}}`

    }

}

/*-----Raton-----*/

class Raton extends DispositivoEntrada {

    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    get getIdRaton() {
        return this.idRaton;
    }

    toString() {
        return `Raton ${this.idRaton} {Marca: ${this.marca}, Tipo de entrada: ${this.tipoEntrada}}`
    }
}

/*-----Teclado-----*/
class Teclado extends DispositivoEntrada {

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    get getIdTeclado() {
        return this.idTeclado;
    }

    toString() {
        return `Teclado ${this.idTeclado} {Marca: ${this.marca}, Tipo de entrada: ${this.tipoEntrada}}`
    }

}

/*-----Computadora-----*/
class Computadora{

    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;

    }

    get getIdComputadora(){
        return this.idComputadora;
    }

    get getNombre(){
        return this.nombre;
    }

    get getMonitor(){
        return this.monitor;
    }

    get getTeclado(){
        return this.teclado;	
    }

    get getRaton(){
        return this.raton;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    set setMonitor(monitor){
        this.monitor = monitor;
    }

    set setTeclado(teclado){
        this.teclado = teclado;	
    }

    set setRaton(raton){
        this.raton = raton;
    }

    toString() {
        return `Computadora ${this.idComputadora} {
        \nNombre: ${this.nombre}, 
        \nMonitor: ${this.monitor}, 
        \nTeclado: ${this.teclado},
        \nRaton: ${this.raton}
        \n}`
    }
}

/*-----Orden-----*/
class Orden {

    static contadorOrdenes = 0;

    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadoras = [];
    }

    agregarComputadora(computadora) {

        this.computadoras.push(computadora);

    }

    mostrarOrden() {

        let computadoraOrden = '';

        for (let computadora of this.computadoras) {

            computadoraOrden += `\n{${computadora.toString()}}`

        }

        console.log(`\nOrden: ${this.idOrden}, Computadoras: ${computadoraOrden}`);

    }

    get getIdOrden(){
        return this.idOrden;
    }
}

let raton1 = new Raton("Micro USB", "LVLUP");
let teclado1 = new Teclado("USB 2.0", "LVLUP");
let monitor1 = new Monitor("Samsung", "70 cm");
let computadora1 = new Computadora("Samsung", monitor1, teclado1, raton1);

let raton2 = new Raton("USB 2.0", "Casio");
let teclado2 = new Teclado("USB 2.0", " Logitech G");
let monitor2 = new Monitor("ASUS", "30 cm");
let computadora2 = new Computadora("ASUS", monitor2, teclado2, raton2);

//console.log(computadora1.toString());

let orden = new Orden();

orden.agregarComputadora(computadora1);
orden.agregarComputadora(computadora2);

orden.mostrarOrden();
