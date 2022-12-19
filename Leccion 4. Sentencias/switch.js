let numero = 1;
switch (numero) {

    case 1:
        console.log("es uno");
        break;

    case 2:
        console.log("es dos");
        break;

    case 3:
        console.log("es tres");
        break;

    default:
        console.log("no hay ese numero en la lista");
}


let mes = 0;

switch (mes) {

    case 1: case 2: case 12:
        console.log("Es invierno");
        break;
    case 3: case 4: case 5:
        console.log("Es primavera")
        break;
    case 6: case 7: case 8:
        console.log("Es verano");
        break;
    case 9: case 10: case 11:
        console.log("Es verano");
        break;
    default:
        console.log("pusiste un numero diferente al de los meses");
}