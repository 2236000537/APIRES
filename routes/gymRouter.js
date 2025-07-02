
const express = require('express');
const router = express.Router();
const ejercicioControlle  =require('../app/controllers/ejerciciosController')

router.get('/ejercicios',ejercicioControlle.buscarTodo)
module.exports = router;
