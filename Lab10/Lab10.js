const filesystem = require('fs');
const { rawListeners } = require('process');
const Readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


htmlpro = filesystem.readFileSync('TestLAb.html');
htmlfavs = filesystem.readFileSync('Lab10.html');
const http = require('http');
const server = http.createServer((request, response)=>{
    
    if(request.url == "/"){
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write("<h1> Entra a /cine para comprar boletos de cine </h1>");
        response.write("<br>")
        response.write("<h1> usa /comprar para ver boletos disponibles </h1>");
        response.write("<br>")
        response.write("<h1> Usa /pagina para ver el listado de comida que puedes pedir </h1>")
    }
    else if(request.url == "/cine" && request.method == "GET"){
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write("<h1> Pagina para guardar tus peliculas favoritas </h1>");
        response.write("<br>")
        response.write('<form action="/cine" method="POST">');
        response.write('<label for="NPeli">Titulo Pelicula: </label>');
        response.write('<input type="text" id="Npeli" name="NPeli>');
        response.write("<br>");
        response.write("<br>");
        response.write('<input type="submit" id="enviar" name="enviar" value="Registrar">');
        response.write("</form>");

    }
    else if(request.url == "/cine" && request.method == "POST"){
        const info = []
        request.on('data', (dato) => {
            
            info.push(dato);
            
        });
        return request.on('end', () => {
            const dato_final = Buffer.concat(info).toString();
            filesystem.writeFileSync('salida.txt', dato_final.split('&')[0].split('=')[1]);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write("<h1>Se ha guardado la info en un texto</h1>");
            response.end();
        });
    }
    else if(request.url == "/favs"){
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        
        response.write(htmlfavs)
        response.write("<br>")
    }
    else if(request.url == "/pagina"){
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html');
        response.write(htmlpro);
    }
    else{
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write("<h1>Error 404: El recurso solicitado no existe</h1>");
        response.write("<h1> En caso de que deba existir, contacte al administrador del sistema </h1>")
        
    }
    response.end();
});

server.listen(3000);