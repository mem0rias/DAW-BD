let qCalifornia = document.getElementById("qCalifornia");
let tCalifornia = document.getElementById("tCalifornia");
let cCalifornia = document.getElementById("cCalifornia");
let cTeriyaki = document.getElementById("cTeriyaki");
let qTeriyaki = document.getElementById("qTeriyaki");
let tTeriyaki = document.getElementById("tTeriyaki");
let cDedos = document.getElementById("cDedos");
let qDedos = document.getElementById("qDedos");
let tDedos = document.getElementById("tDedos");
let BotonLab6 = document.getElementById("promo");
let BotonLab62 = document.getElementById("promo2");
let botonfin = document.getElementById("fin");
let promoflag = 0;
let promoflag1 = 0;
console.log(qCalifornia);

qCalifornia.onchange = () =>{
    console.log(qCalifornia.value);
        tCalifornia.innerHTML = "$" + (qCalifornia.value*Number(cCalifornia.innerHTML));
    tCalifornia.style.color = "blue";
    tCalifornia.style.fontFamily = "courier";
    document.getElementById("totalm").innerHTML = "Total: $" + ObtenerTotal();
    
}
cCalifornia.onchange = () => {
    tCalifornia.innerHTML = "$" + (qCalifornia.value*Number(cCalifornia.innerHTML));
    document.getElementById("totalm").innerHTML = "Total: $" + ObtenerTotal();
}

qTeriyaki.onchange = () =>{
    console.log(qTeriyaki.value);
    tTeriyaki.innerHTML = "$" + (qTeriyaki.value*Number(cTeriyaki.innerHTML));
    document.getElementById("totalm").innerHTML = "Total: $" + ObtenerTotal();
}
cTeriyaki.onchange = () => {
    tTeriyaki.innerHTML = "$" + (qTeriyaki.value*Number(cTeriyaki.innerHTML));
    document.getElementById("totalm").innerHTML = "Total: $" + ObtenerTotal();
}

qDedos.onchange = () =>{
    console.log(qDedos.value);
    tDedos.innerHTML = "$" + (qDedos.value*Number(cDedos.innerHTML));
    document.getElementById("totalm").innerHTML = "Total: $" + ObtenerTotal();
}
cDedos.onchange = () => {
    tDedos.innerHTML = "$" + (qDedos.value*Number(cDedos.innerHTML));
    document.getElementById("totalm").innerHTML = "Total: $" + ObtenerTotal();
}
BotonLab6.onclick = () =>{
    if(!promoflag && !promoflag1){
        cCalifornia.innerHTML = cCalifornia.innerHTML*0.9;
        cTeriyaki.innerHTML = cTeriyaki.innerHTML*0.9;
        cDedos.innerHTML = cDedos.innerHTML*0.9;
        promoflag = 1;
    }
    else if(promoflag && !promoflag1){
        cCalifornia.innerHTML = cCalifornia.innerHTML/0.9;
        cTeriyaki.innerHTML = cTeriyaki.innerHTML/0.9;
        cDedos.innerHTML = cDedos.innerHTML/0.9;
        promoflag = 0;
    }
    tCalifornia.innerHTML = "$" + (qCalifornia.value*Number(cCalifornia.innerHTML));
    tTeriyaki.innerHTML = "$" + (qTeriyaki.value*Number(cTeriyaki.innerHTML));
    tDedos.innerHTML = "$" + (qDedos.value*Number(cDedos.innerHTML));
    document.getElementById("totalm").innerHTML = "Total: $" + ObtenerTotal();
}
BotonLab62.onclick = () =>{
    if(!promoflag1 && !promoflag){
        cCalifornia.innerHTML = cCalifornia.innerHTML*0.8;
        cTeriyaki.innerHTML = cTeriyaki.innerHTML*0.8;
        cDedos.innerHTML = cDedos.innerHTML*0.8;
        promoflag1 = 1;
    }else if(promoflag1 && !promoflag){
        cCalifornia.innerHTML = cCalifornia.innerHTML/0.8;
        cTeriyaki.innerHTML = cTeriyaki.innerHTML/0.8;
        cDedos.innerHTML = cDedos.innerHTML/0.8;
        promoflag1 = 0;
    }
    tCalifornia.innerHTML = "$" + (qCalifornia.value*Number(cCalifornia.innerHTML));
    tTeriyaki.innerHTML = "$" + (qTeriyaki.value*Number(cTeriyaki.innerHTML));
    tDedos.innerHTML = "$" + (qDedos.value*Number(cDedos.innerHTML));
    document.getElementById("totalm").innerHTML = "Total: $" + ObtenerTotal();
}

botonfin.onclick =()=>{
    tCalifornia.innerHTML = "$0";
    tTeriyaki.innerHTML = "$0";
    tDedos.innerHTML = "$0";
    qCalifornia.value = 0;
    qTeriyaki.value = 0;
    qDedos.value = 0;
    document.getElementById("totalm").innerHTML = "Total: $0";
    confirm("Compra Realizada con exito!");
}

botonfin.onmouseover = () => {
    document.getElementById("info_extra").innerHTML = '<p> Al pulsar este boton tu compra se realizara y se limpiaria la info de las cantidades </p>';
}
botonfin.onmouseleave = () => {
    document.getElementById("info_extra").innerHTML = '';
}

const ObtenerTotal = () => {
    let Totall = ((qCalifornia.value*Number(cCalifornia.innerHTML) + (qTeriyaki.value*Number(cTeriyaki.innerHTML))) + (qDedos.value*Number(cDedos.innerHTML)));
    return Totall;
}


const http = require('http');
const server = http.createServer((request, response)=>{
    console.log(request.url);
    if(request.url == "/holi")
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1> Holi boliii </h1>");
    response.end();
});

server.listen(3000);