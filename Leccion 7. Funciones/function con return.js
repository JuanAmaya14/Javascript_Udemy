
let num1 = 2;
let num2 = 7;

let result = suma(num1, num2);

console.log(num1 + " + " + num2 + " = " + result);

//Declaracion de funcion

function suma(num1, num2) {

    return num1 + num2;

}


//Funcion tipo expresion

let x = function (num1, num2) { return num1 + num2; }

result = x(1, 2);

console.log(result);


//Funcion self invoking (se llama asi misma)
(function () {
    console.log("ola");
})();


//Funcion tipo flecha
const sumarFuncionFlecha = (a, b) => a + b;

console.log(sumarFuncionFlecha(4, 6));