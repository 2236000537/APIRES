const mongoose= require('mongoose')

const ejercicioEsquema = mongoose.Schema ({
    nombre:{
type:String,
required:true
    },
    tipo :{
type:String,
required:true
    },
    duracion:{
 type:Number,
required:true

    },
    calorias:{
type:Number,
required:true

    }
})

const ejercicio =mongoose.model('Ejercicios',ejercicioEsquema)

module.exports = ejercicio
