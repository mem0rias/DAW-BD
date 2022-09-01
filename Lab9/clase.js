const filesystem = require('fs');
filesystem.writeFileSync('hola.txt', 'Hola desde Node');
console.log('Holi Boli');

const http = require('http');
const server = http.createServer((request, response)=>{
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1> Holi boliii </h1>");
    response.end();
});

server.listen(3000);