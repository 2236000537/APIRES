
const express = require('express');
const router = express.Router();
const ejercicioControlle  =require('../app/controllers/ejerciciosController')


router.get('/ejercicios',ejercicioControlle.buscarTodo)

.post('/ejercicios',ejercicioControlle.guardarEjercicios)
.get('/ejercicios/:key/:value',ejercicioControlle.buscarEjercicio,
    ejercicioControlle.mostraEjercicio)

    
.delete('/ejercicios/:key/:value',
    ejercicioControlle.buscarEjercicio,
    ejercicioControlle.eliminarEjercicio)

.put('/ejercicios/:key/:value', ejercicioControlle.editarEjercicio);


module.exports = router;
