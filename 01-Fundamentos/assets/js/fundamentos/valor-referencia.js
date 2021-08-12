let a=10;
let b=a;

a=30;

console.log(a,b);

let juan={nombre:'Juan'};
//let ana=juan;

let ana={ ...juan };  //operador spread

ana.nombre='Ana'; //sale en los dos objetos Ana

//primitivos por valor, objetos por referencia
console.log(juan,ana);

const cambiaNombre=({...persona}) => {
    persona.nombre='Tony';
    return persona;
}

let peter={nombre: 'Peter'};
let tony=cambiaNombre(peter);

console.log(peter,tony);


//Arreglos

const frutas=['manzana','pera','piña'];
//const otrasFrutas=frutas;

console.time('spread');
const otrasFrutas=[...frutas];  // entre corchetes y con spread
console.timeEnd('spread');
console.time('slice')
const otrasFrutas1=frutas.slice();  // otra forma
console.timeEnd('slice')
otrasFrutas.push('Mango');

console.log(frutas,otrasFrutas);

