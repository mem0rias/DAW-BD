const filesystem = require('fs');
const { rawListeners } = require('process');
const Readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
/*
const crearArreglo = () => {
    let str = "";
    for(let i = 0; i < 30; i++){
        str += parseInt(Math.random()*10) + "\n";
    }
    console.log(str);
    return str;
}*/
const leerArreglo = (texto) => {
    let arr = new Array();
    for(let i = 0; i < texto.length; i++){
        if(texto[i] != '10'){
            //console.log(texto[i]);
            arr.push(texto[i] - 48)
        }
            
    }
    return arr;
}

const promedioArreglo = (arr) => {
    let acum = 0;
    for(let i = 0; i < arr.length; i++){
        acum += arr[i];
    }
    return acum/arr.length;
}

//Funcion para determinar si un numero es primo
const numeroPrimo = (numero) => {
    let raiz = Math.sqrt(numero);
    for(let i = 2; i <= raiz; i++){
        if(numero%i == 0)
            return false;
    }
    return true;
}

// Escritura de string del usuario en archivo
const Q1 = () =>{
    return new Promise((resolve, reject) => {
        Readline.question('Escribe algo: ', (Texto) => { filesystem.writeFileSync('Texto.txt', Texto); resolve();});
    });
}
// Calcular si un numero es primo o no.
const Q2 = () => {
    return new Promise((resolve, reject) => {
        Readline.question('Dame un numero: ', primo => {
            if(numeroPrimo(parseInt(primo))){
                console.log("El numero es primo");
            }
            else
                console.log("El numero no es primo");
            resolve();
        });
    });
}

const main = async () => {
    //Lectura de arreglo y calculo de promedio
    let texto = filesystem.readFileSync('numeros.txt');
    arr = leerArreglo(texto);
    console.log('El promedio del arreglo eS: ' + promedioArreglo(arr));
    await Q1();
    await Q2();
    Readline.close();
}

main();
//Envio de HTML por peticion al servidor
const http = require('http');
const html = filesystem.readFileSync('../Lab1/index.html');
const server = http.createServer((request, response)=>{
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(html);
    response.end();
});

server.listen(3000);