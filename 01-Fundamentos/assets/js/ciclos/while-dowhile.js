const carros=['Ford','Toyota','Honda','Mazda'];
let i=0;

while (i<carros.length) {
    console.log(carros[i]);
    //i=i+1;
    i++;

}

console.log(carros[10]);


while (i<carros.length) {
    console.log(carros[i]);
    //i=i+1;
    i++;

    //break  sale del sitio

    //continue  

}



console.warn("do while");
let j=0;
do {
    console.log(carros[j])
    j++;
} while (j<carros.length);




console.warn("for");

const heroes=['Batman','Superman','Mujer maravilla'];

console.warn("for tradicional");

for (i=0;i<heroes.length;i++) {

    console.log(heroes[i]);
}


console.log("for in");

for (let i in heroes) {
    console.log(heroes[i]);
}

console.log("for of");  //referencias a objetos

for (let heroe of heroes) {
    console.log(heroe);
}