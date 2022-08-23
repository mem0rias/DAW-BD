console.log("Hello World");
console.info("Esto es importante");
console.warn("Esto es una advertencia");
console.error(1===1);

// Comparar valores
console.assert(1 == true);
    
//=== compara valor y tipo de dato
    console.assert(1 == true);
console.assert("1" == 1 );
const precio = 9.99999;
var Robot = "Fanuc"
for(var i = 0; i < 10; i++){
    console.log(i);
}
let carrera = "ISDR";
console.log(carrera);
for(let j = 0; j < 10; j++){
    console.log(j);
}

console.log(1+3+"4");
console.log("4"+3+2+1);

const nombre = prompt("como te llamas?");
console.log("hola" + nombre);
const respuesta = confirm("Tienes sueño?");
if(respuesta){
    console.log("Necesitas cafe");
}else{
    console.log("No necestias cafe");
}

function tomar_cafe(){
    console.log("Glu glu glu");
}

tomar_cafe();
function tomar(bebida){
    console.log("Tomando " + bebida);
}
tomar("te");
//Funciones modernas
const comer = (comiendo) => {
    console.log("Comiendo" + comiendo);
}

comer("Pollo");

let comiendo  = comer;
comiendo(" Panditas");

// Arregla
const arreglo = [1,2,3,"Elemento"]