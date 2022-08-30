

let validatebutton = document.getElementById("validate");

validatebutton.onclick = () => {
    const pass = document.getElementById("pass").value;
    let validateP = document.getElementById("validateP").value;
    console.log(pass);
    console.log(validateP);
    if(Empty(pass,validateP) && Valid(pass,validateP))
        Matches(pass,validateP);
}

const Valid = (pass,pass2) => {
    var numberPattern = /\d+/g;
    var specialChars = /\W|_/g;
    console.log(pass.match(numberPattern));
    console.log(pass.match(specialChars));
    if(pass.length < 8){
        alert("La contraseña tiene menos de 8 caracteres");
        
    }else if(pass.match(numberPattern) == null){
        alert("La contraseña necesita al menos un numero");
        return 0;
    }else if(pass.match(specialChars) == null){
        alert("La contraseña necesita al menos un caracter especial");
        return 0;
    }
    return 1;
}
const Empty = (pass, pass2) =>{
    if(pass.length == 0 || pass2.length == 0){
        alert("Tienes que escribir en ambos campos")
        return 0;
    }
    return 1;
}
const Matches = (pass1, pass2) => {
    if(pass1 != pass2)
        alert("Las contraseñas no coinciden");
    else
        alert("Las contraseñas coinciden!!");
}
