let qCalifornia = document.getElementById("qCalifornia");
let tCalifornia = document.getElementById("tCalifornia");
let cCalifornia = document.getElementById("cCalifornia");
let BotonLab6 = document.getElementById("promo");
let BotonLab62 = document.getElementById("promo2");
console.log(qCalifornia);

qCalifornia.onchange = () =>{
    console.log(qCalifornia.value);
    tCalifornia.innerHTML = "$" + (qCalifornia.value*Number(cCalifornia.innerHTML));
}
cCalifornia.onchange = () => {
    tCalifornia.innerHTML = "$" + (qCalifornia.value*Number(cCalifornia.innerHTML));
}
BotonLab6.onclick = () =>{
    cCalifornia.innerHTML = cCalifornia.innerHTML*0.9;
    tCalifornia.innerHTML = "$" + (qCalifornia.value*Number(cCalifornia.innerHTML));
}
BotonLab62.onclick = () =>{
    cCalifornia.innerHTML = cCalifornia.innerHTML*0.8;
    tCalifornia.innerHTML = "$" + (qCalifornia.value*Number(cCalifornia.innerHTML));
}

