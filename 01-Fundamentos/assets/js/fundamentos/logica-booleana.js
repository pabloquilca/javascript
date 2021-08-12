const regresaTrue=()=> {
    console.log("regresa true");
    return true;
}

const regresaFalse=()=> {
    console.log("regresa false");
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);

console.warn('AND')  //solo si todos son verdaderos
console.log(true && true);
console.log(true && false);

console.log("==============");
//console.log(regresaFalse() && console.regresaTrue() );

console.log(regresaTrue() && regresaFalse() );


console.log("===================");
regresaFalse() && regresaTrue();   //en codigo hace lo uno o lo otro



console.warn("OR");

console.log(true || false);

console.warn("Asignaciones ")

const soyUndefined=undefined;
const soyNull=null;
const soyFalse=false;


const a1=true && 'Hola mundo' && 150;

console.log({a1});

const a2='Hola ' && 'Mundo' && soyFalse;

console.log(a2);

const a3=soyFalse || 'Ya no soy false';

console.log(soyFalse);

