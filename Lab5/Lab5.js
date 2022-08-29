let idTablas = document.getElementById("Tablas");
let idNumero = document.getElementById("Suma");
let idContador = document.getElementById("Contador");
let idPromedios = document.getElementById("Promedios");
let idInversos = document.getElementById("Inversos");
let idSumaMatrices = document.getElementById("SumaM");



idTablas.onclick = () => {
    const numero = prompt("Dame un numero");
    document.write("<table> <tr> <th> Numero </th> <th> Cuadrado </th> <th> Cubo </th> </th> </tr> ");
    console.log("Tu numero es: " + numero);
    for(let i = 1; i <= numero; i++){
        document.write("<tr><td>" + i + "</td>");
        document.write("<td>" + Math.pow(i,2) + "</td>");
        document.write("<td>" + Math.pow(i,3) + "</td></tr>"); 
    }
}



idNumero.onclick = () => {
    const sumatoria = Math.round(Math.random()*10 + Math.random()*10);
    console.log("El numero secreto es: " + sumatoria);
    const date = new Date;
    let tiempo = date.getTime();
    let sumaaleatoria = prompt("Dame un numero pt2");
    while(sumaaleatoria != sumatoria){
        confirm("El numero no coincide");
        sumaaleatoria = prompt("Intenta nuevamente");
    }
    const T2 = new Date;
    let endTime = T2.getTime() - tiempo;
    confirm("Le atinaste al numero!!!");
    //console.log(tiempo);
    //console.log(endTime);
    console.log("Tiempo total para encontrar el numero secreto: " + (endTime/1000) + "s");
}


idContador.onclick = () => {
    let arreglo = LlenarArreglo();
    let ceros = 0, neg = 0, pos = 0;
    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] < 0)
            neg++;
        else if(arreglo[i] > 0)
            pos++;
        else if(arreglo[i] == 0)
            ceros++;
    }
    confirm("En el arreglo hay " + ceros + " ceros, " + neg + " valores menores a 0, " + pos + " valores mayores a 0"); 
}
const LlenarArreglo = () => {
    const maxnum = prompt("Cuantos numeros ingresaras?");
    const arreglo = new Array(maxnum);
    for(let i = 0; i < maxnum; i++){
        arreglo[i] = prompt("Numero " + i);
    }
    return arreglo;

}

idPromedios.onclick = () =>{
    let matriz = LlenarMatriz();
    let promedio = new Array(matriz.length);
    for(let i = 0; i < matriz.length; i++){
        let acum = 0;
        for(let j = 0; j < matriz[i].length; j++){
            acum += matriz[i][j];
        }
        console.log(acum);
        promedio[i] = acum/matriz[i].length;
    }
    let stringsalida = "[";
    for(let i = 0; i < promedio.length; i++){
        stringsalida += promedio[i];
        if(i != promedio.length-1)
            stringsalida += ", ";
    }
    stringsalida += "]";
    confirm("El promedio de cada renglon de la matriz es: " + stringsalida);

}
const LlenarMatriz = () => {
    const filas = prompt("Cuantas Filas tiene el arreglo?");
    const columnas = prompt("Cuantas columnas tiene el arreglo?");
    let matriz = new Array(filas);
    for(let i = 0; i < filas; i++){
        matriz[i] = new Array(columnas);
        for(let j = 0; j < columnas; j++){
            matriz[i][j] = parseInt(prompt("Ingresa el valor de [" + i + "," + j +"]"));
        }
    }
    return matriz;
    
}


idInversos.onclick = () => {
    let numeroInt = 0;
    numeroInt = parseInt(prompt("Ingresa un  numero para invertirlo")); 
    let numero = numeroInt.toString();
    let aux = "";
    for(let i = 0; i < numero.length; i++){
        
        aux += numero[(numero.length-1)-i];

    }
    confirm("El inverso de " + numero + " es: " + aux);
}


idSumaMatrices.onclick = () => {
    let matriz1 = new Array();
    let matriz2 = new Array(); 
    do{
        confirm("Ingresa 2 matrices del mismo tamaño");
        matriz1 = LlenarMatriz();
        matriz2 = LlenarMatriz();
    } while(matriz1.length != matriz2.length);
    for(let i = 0; i < matriz1.length; i++){
        for(let j = 0; j < matriz1[i].length; j++){
            matriz1[i][j] += matriz2[i][j];
        }
    }

    let stringsalida = "";
    for(let i = 0; i < matriz1.length; i++){
        stringsalida += "[";
        for(let j = 0; j < matriz1[i].length; j++){
            stringsalida += matriz1[i][j];
            if(j != matriz1[1].length-1)
                stringsalida += ", ";
        }
        stringsalida += "]\n";
    }
    confirm("El resultado de la suma de matrices es: \n" + stringsalida);

}  

