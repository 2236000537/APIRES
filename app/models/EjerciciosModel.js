const mongoose= require('mongoose')

const ejercicioEsquema = mongoose.Schema ({
    nombre:{
type:String,
require:true
    },
    tipo :{
type:String,
require:true
    },
    duracion:{
 type:Number,
require:true

    },
    calorias:{
type:Number,
require:true

    }
})

const ejercicio =mongoose.model('Ejercicios',ejercicioEsquema)

module.exports = ejercicio
