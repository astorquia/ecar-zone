const express = require('express'); // Importar la libreria express
const mysql = require('mysql'); // Importa la libreria mysql de node_modules
// hemos cambiado var por const 
const app = express(); // Creamos una aplicacion express
const cors = require('cors');
app.use(cors());
app.options('*', cors());

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ecarzone'
});
connection.connect();

app.get('/valoraciones', function (req, res) {
  connection.query('SELECT * FROM `valoracion`', function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/estaciones', function (req, res) {
  connection.query('SELECT * FROM `estacion`', function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/imagenes', function (req, res) {
  connection.query('SELECT * FROM `imagen`', function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/estacion/:id', function (req, res) {
  const id = req.params.id;
  const query = 'SELECT * FROM `estacion` WHERE id = ' + id;
  connection.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/valoracion/:id', function (req, res) {
  const id = req.params.id;
  const query = 'SELECT * FROM `valoracion` WHERE id = ' + id;
  connection.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/imagen/:id', function (req, res) {
  const id = req.params.id;
  const query = 'SELECT * FROM `imagen` WHERE id = ' + id;
  connection.query(query, function (error, results) {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/', function (req, res) {  //   /  <<<  es un endpoint
  res.send('Hello er!');
});

app.listen(3000, function () {
  console.log('Antonio API en mARCHA, PUERTO 3000');
});