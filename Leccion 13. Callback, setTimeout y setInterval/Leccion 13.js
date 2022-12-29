//Funcion tipo callback
function imprimir(mensaje) {
    //console.log(mensaje);
}

function sumar(a, b, funcionCallback) {
    let res = a + b;
    funcionCallback(`Resultado: ${res}`);
}

sumar(3, 4, imprimir);

//Llamadas asincronas con uso setTimeout
function miFuncionCallback() {
    //console.log("saludo asincrono despues de 10 segundos");
}

//setTimeout(miFuncionCallback, 10000); //en 10 segundos ejecuta la funcion



//setInterval
let reloj = () => {
    let fecha = new Date();
    fecha.getSeconds =
        console.log(`${fecha.getHours()}:${fecha.getMinutes()}`);
}

setInterval(reloj, 1000); //llama a la funcion cada un segundo

