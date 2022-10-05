const db = require('../util/database');

module.exports = class User {
    constructor(nombre, A1, A2, EC, Email, Ocup, Tel){
        this.nombre = nombre;
        this.A1 = A1;
        this.A2 = A2;
        this.EC = EC;
        this.Email = Email;
        this.Ocup = Ocup;
        this.Tel = Tel;
    }

    save(){
        return db.execute(
            'INSERT INTO usuarios(nombre, Primer_Apellido, Segundo_Apellido, Correo_Electronico, Estado_Civil, Ocupacion, Telefono) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [this.nombre, this.A1, this.A2, this.EC, this.Email, this.Ocup, this.Tel]);
            
    }
}