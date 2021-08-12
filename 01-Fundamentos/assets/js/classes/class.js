class Persona {

    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre,codigo,frase) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.frase = frase;

        console.log("hola! ");
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre} y mi identidad es ${ this.codigo } `  );
    }

    miFrase() {
        console.log(`${ this.codigo} dice ${ this.frase } `  );
    }
}


const spiderman=new Persona("Peter Parker","Spiderman","Amigable vecino");
const ironman=new Persona("Tony Star","Iroman","Yo soy IronMan");
console.log( spiderman  );
console.log( ironman  );
ironman.quienSoy();
spiderman.miFrase();