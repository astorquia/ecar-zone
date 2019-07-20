const express = require('express'); // Importar la libreria express
const mysql = require('mysql'); // Importa la libreria mysql de node_modules
// hemos cambiado var por const 
const app = express(); // Creamos una aplicacion express

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ecarzone'
});
connection.connect();

app.get('/valoraciones', function (req, res) {
  connection.query('SELECT * FROM `valoracion`', function (error, results, fields) {
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