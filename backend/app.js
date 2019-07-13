const express = require('express'); // Importar la libreria express
const app = express(); // Creamos una aplicacion express

// var, let, const

//  METODO DE JAVASCRIPT  "SPLIT"   que separa un String y te crea un Array
//  EL METODO INVERSO DE  "SPLIT"   

app.get('/pruebas', function (req, res) {  //   /usuarios  <<<  es un endpoint
    const misDatos = ["hola", "adios", "No"];
    res.send(misDatos.join('*'));
});

app.get('/empresas', function (req, res) {  //   /usuarios  <<<  es un endpoint
    const misDatos = [44, 55, 77];
    res.send(misDatos);
});

app.get('/usuarios', function (req, res) {  //   /usuarios  <<<  es un endpoint
  res.send('paco');
});

app.get('/', function (req, res) {  //   /  <<<  es un endpoint
  res.send('Hello er!');
});

app.listen(3000, function () {
  console.log('Antonio API en mARCHA, PUERTO 3000');
});