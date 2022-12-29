//Promise
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;

    if (expresion) {
        resolver('Resolve');
    } else {
        rechazar('Reject');
    }
});

// miPromesa
// .then(valor => console.log(valor))
// .catch(error => console.log(error));


//Promise con setTimeout
let promesa = new Promise(
    (resolver) => {
        setTimeout(() => resolver('saludos con promesa y timeout'), 3000);
    });

//promesa.then(valor => console.log(valor));


//Promise con async(obliga a la funcion retornar una promesa)
async function miFuncionConPromesa() {
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));


//async/await
async function funcionConPromesaYAwait() {
    let miPromesa = new Promise(resolver => {
        resolver('Promesa con await');
    });

    console.log(await miPromesa);
}

//funcionConPromesaYAwait();


//Promesa con Async, Await y setTimeout
async function funcionConTodaLaWea() {
    let miPromesa = new Promise(
        resolver => {

            setTimeout(() => resolver('Correcto'), 5000);

        });

    console.log(await miPromesa);
}

//funcionConTodaLaWea();
