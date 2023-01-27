const express = require('express')
const hbs = require('hbs');
// para variables de entorno, en este caso el PORT
require('dotenv').config()



const app = express()
const port = process.env.PORT

// handlbars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');
// servir contenido estatico
app.use(express.static('Public'));


// La pagina de inicio no hace falta por el midelware de arriba.

app.get("/", (req,res)=>{
  res.render('home', { // valores que le podemos pasar al index html , para colocar el valor es {{nombre}}
    nombre: "Cristian Micchele",
    titulo: "Curso de node"
})
})



app.get('/generic', (req,res)=>{
  res.render('generic', { // valores que le podemos pasar al index html , para colocar el valor es {{nombre}}
    nombre: "Cristian Micchele",
    titulo: "Curso de node"
})
})



app.get('/elements', (req,res)=>{
  res.render('elements', { // valores que le podemos pasar al index html , para colocar el valor es {{nombre}}
    nombre: "Cristian Micchele",
    titulo: "Curso de node"
})
})

// para pagina no existente
app.get('*', (req,res)=>{
  res.sendFile(__dirname + '/Public/error404.html') // enviar archivo html (estatico) con sendFile y el dirname es para encontrar la ruta.
})


app.listen(port)
console.log(`Conectando en el puerto ${port}`)