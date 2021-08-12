function crearPersona(nombre,apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}


function crearPersona1(nombre,apellido) {
    return {nombre,apellido}
}

const crearPersona2=(nombre,apellido) => ({nombre,apellido});



const persona=crearPersona('Pablo','Quilca');

console.log(persona);

const persona1=crearPersona1('Pablo','Quilca');


function imprimeArgumentos( ){
    console.log(arguments);
}

const imprimeArgumentos2=( ...args ) => console.log(args);

console.log(persona1);

const persona2=crearPersona2('Pablo','Quilca');

console.log(persona2);

imprimeArgumentos2(1,true,'Pablo');

//no es necesario poner el nombre si es gual al argumento

