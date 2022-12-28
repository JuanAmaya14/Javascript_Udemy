/*-----PRODUCTO-----*/
class Producto {

    static ContadorProductos = 0;

    constructor(nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.ContadorProductos;
    }

    get getIdProducto() {
        return this._idProducto;
    }

    get getNombre() {
        return this._nombre;
    }

    get getPrecio() {
        return this._precio;
    }

    set setNombre(nombre) {
        this._nombre = nombre;
    }

    set setPrecio(precio) {
        this._precio = precio;
    }

    toString() {
        return `Producto #${this._idProducto}{Nombre: \'${this._nombre}\', Precio: \'${this._precio}\'}`;
    }

}

/*-----ORDEN-----*/
class Orden {

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {

        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get getIdOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {

        if (this._productos.length < Orden.MAX_PRODUCTOS) {

            this._productos.push(producto);

        } else {

            console.log("No se pueden agregar mas productos");

        }

    }

    calcularTotal() {
        let totalVenta = 0;

        for (let producto of this._productos) {

            totalVenta += producto._precio;

        }
        return totalVenta;
    }

    mostarOrden() {

        let productosOrden = '';

        for (let producto of this._productos) {

            productosOrden += '\n{' + producto.toString() + '} ';

        }

        console.log(`\nOrden: ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }

}

let producto1 = new Producto('Pantalon', 50000);
let producto2 = new Producto('Camisa', 30000);
let producto3 = new Producto('PSP', 100000);
let producto4 = new Producto('Laptop', 2000000);

console.log(producto1.toString());

let orden1 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostarOrden();


let orden2 = new Orden();

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto2);

orden2.mostarOrden();
