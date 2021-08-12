let a=5;

if (a>10) {  //undefined, null, asignacion
    console.log("A mayor 10");
}

console.log("Fin de programa");

const hoy=new Date();
let dia=hoy.getDay(); //0 domingo

//if (dia==0) {  //compara pero no importa el tipo
//if (dia=0) {  //asignacion, cambia el valor de la variable
if (dia===0) {
    console.log("Hoy es domingo");
} else {
    console.log("HOy no es domingo");
}

console.log(dia);

//alternativa
//solo usando objetos

let diasSemana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
console.log(diasSemana[dia]);

const diasLetras={
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}
console.log(diasLetras[dia] || "Dia no existe");

//se puede poner funciones
const diasLetrasFuncion={
    0: ()=>'Domingo - 0',
    1: ()=>'Lunes 1 ',
    2: ()=>'Martes',
    3: ()=>'Miercoles',
    4: ()=>'Jueves',
    5: ()=>'Viernes',
    6: ()=>'Sabado',
}

console.log(diasLetrasFuncion[dia]() || "Dia no existe");


