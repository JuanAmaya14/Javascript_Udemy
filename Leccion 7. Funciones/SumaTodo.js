let resultado = sumarTodo(5, 6, 4, 3, 7, 1);
console.log(resultado);

function sumarTodo() {

    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {

        suma += arguments[i]; //suma = suma + arguments[i]
    }

    return suma;

}