
const express = require('express');
const app = express();
const router = require('../routes/gymRouter'); // Asegúrate que la ruta sea correcta

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/gym', router); // Ruta corregida: 'gym' en lugar de 'gmy'

module.exports = app;
