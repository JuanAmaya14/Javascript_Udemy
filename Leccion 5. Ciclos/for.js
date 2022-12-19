
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


//for
console.log("FOR");
for (let i = 0; i <= numeros.length; i++) {

    if (i % 2 !== 0) {
        console.log(numeros[i]);
    }

}

//for each
console.log("FOR EACH");
numeros.forEach(numero => { console.log(numero); });
