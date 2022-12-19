//Par o impar

let x = 3;

if (x % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//Mayor o menor de edad

let edad = 23;

if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

//Operador AND

let a = 4,
  valMin = 1,
  valMax = 10;

if (a >= valMin && a <= valMax) {
  console.log(true);
} else {
  console.log(false);
}

//Operador OR

let b = 5;

if (b == 4 || b == 7) {
  console.log(true);
} else {
  console.log(false);
}

//Operador ternario

let resultado = 3 > 2 ? "Verdadero" : "Falso";
console.log(resultado);

resultado = x % 2 == 0 ? "Numero par" : "Numero impar";
console.log(resultado);

//else if

let mes = 0;

if (mes == 12 || mes == 1 || mes == 2) {
  console.log("Es invierno");
} else if (mes == 3 || mes == 4 || mes == 5) {
  console.log("Es primavera")
} else if (mes == 6 || mes == 7 || mes == 8) {
  console.log("Es verano");
} else if (mes == 9 || mes == 10 || mes == 11) {
  console.log("Es otono");
} else {
  console.log("pusiste un numero diferente al de los meses");
}
