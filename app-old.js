const http = require("http")

//crear server
http.createServer((req,resp)=>{
// creacion de un archivo de texto de descarga.
/*     resp.setHeader('Content-disposition', 'attachment; filename=lista.csv')
    resp.writeHead(200, {'Content-type': 'application/csv'}); */

    resp.write('hola mundo' )
 
    resp.end(); // finaliza la tarea.
}).listen(8080)
console.log('Escuchando en el puerto', 8080)
