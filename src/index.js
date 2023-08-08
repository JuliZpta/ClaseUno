let player = "Julian";
player = 2023;

let playerDos = "Peludito";

console.log(playerDos);

let nombre = "Juli";
console.log("Hola Mundo " + nombre);

console.log(`Mi nombre es: ${nombre}`);

let nombr = "Juli";
/Al ser una constante no se puede cambiar el valor de la variable/
const nom = "Lili";
console.log(nom)
/*nom = "a"
console.log(nom)*/

const Transporte = 'Moto';


switch (Transporte) {
  case 'Carro':
    console.log('Felicidades por el carro');
    break;
  case 'Moto':
    console.log('Felicidades por la moto');
    break;
  default:
    console.log('No tienes ni carro ni moto');
}

let Dinero = 1500000;

if (Dinero >= 10000000) {
  console.log('ERES MILLONARIO');
} else if (Dinero >= 2000000 && Dinero <=4000000) {
  console.log('VIVES BIEN');
} else if (Dinero >= 1000000 && Dinero <2000000) {
  console.log('VIVES CON LO MINIMO');
} else {
  console.log('FUERA DEL SONDEO');
}


const PagoCompletado = true;

if (PagoCompletado) {
  console.log('El pago se encuentra registrado');
} else {
  console.log('No se ha registrado el pago');
}
let PagoIncompleto = !PagoCompletado;
console.log(PagoIncompleto)

const Marcas = ['LG', 'Samsung', 'Sony'];

for (let i = 0; i < Marcas.length; i ++) {
  console.log(`${i}. ${Marcas[i]}`);
  
}
/*Al reves*/ 
for (let i = Marcas.length - 1; i >= 0; i -= 1) {
    console.log(`${i}. ${Marcas[i]}`);
  }


let x = 0

do{
    console.log(x)
x++

} while (x < 5);

for (let i = 2; i < 99; i +=2) {
    if (i > 25) {
       break;
    }
    console.log(i)
  }

  let i = 2;
  let w = 0;

  while (i <= 7 || w <=10) {        
    console.log(i);
    console.log(w);
    i+=2;
    w+=5
  }