const ejercicioModelo= require('../models/EjerciciosModel')
 
function buscarTodo (req,res){
    ejercicioModelo.find({
    })
    .then(ejercicios=>{
        if(ejercicios.length){
            return res.status(200).send({ejercicios})
        

        }  

        return res.status(204).send({mensaje:"no hay informacion que mostra"})
        
    })

    .catch(e=>{return res.status(404).send({mensaje:`Error al mostra la informacion${e}`})})

   
}

 module.exports={
        buscarTodo
    }