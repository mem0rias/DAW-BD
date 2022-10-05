const filesystem = require('fs');
module.exports = class Cine {
    constructor(){
        
    }

    add(value) {
        filesystem.appendFileSync('listaFavs.txt', '\n' + value);
    }
    clear() {
        filesystem.writeFileSync('listaFavs.txt', "Spiderman");
    }

    fetchAll(){
        let favoritos = filesystem.readFileSync('ListaFavs.txt').toString();
        const result = favoritos.split(/\r?\n/);
        return result;
    
        
    }
}
