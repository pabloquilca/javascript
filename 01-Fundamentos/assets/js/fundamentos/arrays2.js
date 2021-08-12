let juegos=['Zelda','Mario','Metroid','Otro'];
console.log(juegos.length);

let primero=juegos[0];
let ultimo=juegos[juegos.length-1];

console.log(primero,ultimo);

juegos.forEach((elemento,indice,arr)=>{

    console.log({elemento,indice,arr});
});

let nuevaLongitud=juegos.push('F-Zero');
console.log(nuevaLongitud,juegos);

nuevaLongitud=juegos.unshift('fire embled');
console.log(nuevaLongitud,juegos);

let juegoBorrado=juegos.pop();
console.log(juegoBorrado,juegos);

let posicion=1;
let borrado2=juegos.splice(1,3);
console.log(borrado2,juegos);
