//tienda: dias de la semana abre a las 11
//fin de semana abre a las 9

const dia=0;
const horaActual=10;

let horaApertura;
let mensaje;  

if (dia===0 || dia===6 ) {
    console.log('Fin de semana');
    horaApertura=9;
} else {
    console.log('dias de la semana');
    horaApertura=11;
}

if horaActual>=horaApertura) {
    mensaje='Esta abierto';

} else  {
    mensaje=`Esta cerrado, hoy abrimos a las  horaApertura ${horaApertura}`;
    
}

if ([0,6].includes(dia)) {
 console.log('Abierto') ;
 mensaje="Esta abierto";  
} else {
    mensaje=`Esta cerrado, hoy abrimos a las  horaApertura ${horaApertura}`;
}

horaApertura=([0,6].includes(dia)) ? 9 : 11;

mensaje=(horaActual>=horaApertura) ? "Esta abierto" : `Esta cerrado, hoy abrimos a las  horaApertura ${horaApertura}`;