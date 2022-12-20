const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach(element => { console.log(element); });



for (i = 0; i < numeros.length; i++) {


    numeros[i] *= 10;

}

numeros.push(100 * 10); //Funcion que agrega nuevo elemento al arreglo

numeros.forEach(element => { console.log(element); });

console.log(numeros);

console.log(Array.isArray(numeros));