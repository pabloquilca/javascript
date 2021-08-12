let personaje={
    nombre: "Tony Stark",
    codeName: "IronMan",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I','Mark V','Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula':'Infinity',

};

console.log('Nombre:',personaje['nombre']);
console.log('Nombre: ',personaje.nombre);
console.log('Edad:',personaje.edad);
console.log("Coords:",personaje.coords);
console.log("Lat:",personaje.coords.lat);
console.log("No. trajes: ",personaje.trajes.length);
console.log("Ultimo traje: ",personaje.trajes[personaje.trajes.length-1]);

const x='vivo';
console.log('Vivo: ',personaje[x]);

console.log('Ultima pelicula: ',personaje['ultima-pelicula']);


//Mas detalles

delete personaje.edad;

personaje.casado=true;

const entriePars=Object.entries(personaje); 
console.log(entriePars);

Object.freeze(personaje);
personaje.dinero=100000;

console.log(personaje);

//Metodos utiles

//Listado de las propiedades

const propiedades=Object.getOwnPropertyNames(personaje);
console.log(propiedades);

const valores=Object.values(personaje);
console.log(valores);