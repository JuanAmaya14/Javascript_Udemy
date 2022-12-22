let persona = {
    nombre: "Juan",
    apellido: "Gonzales",
    edad: "28",
    email: "juangonza@gmail.com",
    telefono: "231423545",
    idioma: 'es',
    get getIdioma() {
        return this.idioma.toUpperCase();
    },
    get getNombreCompleto() {
        return this.nombre + " " + this.apellido;
    },
    set SetIdioma(idioma) {
        this.idioma = idioma.toUpperCase();
    }
};

console.log(persona.getIdioma);
console.log(persona.getNombreCompleto);

//llama metodo set y se modifica el valor
persona.SetIdioma = 'en';


console.log(persona.idioma);
