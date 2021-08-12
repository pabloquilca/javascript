function saludar( nombre ) {
    console.log('Hola ' + nombre);
    console.log(arguments);
    return 1;
}


const saludar2=function( nombre ) {
    console.log('Hola mundo 2 '+nombre);
}

const saludar3=() => {
console.log('Hola flecha');

}

const saludar4= (nombre) => {
    console.log('Hola flecha '+nombre);
    //console.log(arguments);
    }
    

console.log(saludar('Pablo',40,true,'Costa Rica'));

saludar2('Pedro');

saludar3();

saludar4('Melissa');


function suma(a,b) {
    return a+b;
}

const sumar2=(a,b) => {
    return a+b;
}

//una sola linea

const sumar3=(a,b) => a+b;

console.log(suma(5,6));
console.log(sumar2(5,6));
console.log(sumar3(5,4));

function getAleatorio() {
    return Math.random();
}

console.log(getAleatorio());

const getAleatorio2=() => Math.random();

console.log(getAleatorio2());