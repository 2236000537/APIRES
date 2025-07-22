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

function guardarEjercicios(req, res) {
    console.log(req.body);

    new ejercicioModelo(req.body).save()
        .then(info => {
            return res.status(200).send({ mensaje: "Información guardada correctamente", info });
        })
        .catch(e => {
            return res.status(404).send({ mensaje: "ERROR AL GUARDAR", error: e });
        });
}

function buscarEjercicio(req, res, next) {
    let consulta = {};
    consulta[req.params.key] = req.params.value;

    ejercicioModelo.find(consulta)
        .then(info => {
            if (!info.length) return next();
            req.ejercicios = info;  // usa req.ejercicios, no req.body.ejercicios
            return next();
        })
        .catch(e => {
            req.e = e;  // usa req.e para el error
            next();
        });
}

function mostraEjercicio(req, res) {
    if (req.e) {
        return res.status(404).send({
            mensaje: "Error al buscar la información",
            error: req.e
        });
    }

    if (!req.ejercicios) {
        return res.status(204).send({
            mensaje: "No hay información que mostrar"
        });
    }

    return res.status(200).send({ ejercicios: req.ejercicios });
}


function eliminarEjercicio(req, res) {
    if (req.e) {
        return res.status(404).send({
            mensaje: "Error al buscar la información",
            error: req.e
        });
    }

    if (!req.ejercicios || !req.ejercicios.length) {
        return res.status(204).send({
            mensaje: "No hay información que mostrar"
        });
    }

    const id = req.ejercicios[0]._id;

    ejercicioModelo.deleteOne({ _id: id })
        .then(info => {
            return res.status(200).send({
                mensaje: "Información eliminada",
                info
            });
        })
        .catch(e => {
            return res.status(404).send({
                mensaje: "Error al eliminar la información",
                error: e
            });
        });
}


function editarEjercicio(req, res) {
    const key = req.params.key;      // campo para buscar (ej: nombre)
    const value = req.params.value;  // valor del campo (ej: 'barra')
    const nuevosDatos = req.body;    // nuevos valores a actualizar

    let filtro = {};
    filtro[key] = value;

    ejercicioModelo.findOneAndUpdate(filtro, nuevosDatos, { new: true })
        .then(info => {
            if (!info) {
                return res.status(404).send({
                    mensaje: "No se encontró el ejercicio para actualizar"
                });
            }
            return res.status(200).send({
                mensaje: "Ejercicio actualizado correctamente",
                ejercicio: info
            });
        })
        .catch(e => {
            return res.status(500).send({
                mensaje: "Error al actualizar el ejercicio",
                error: e
            });
        });
}


 module.exports={
        buscarTodo,
        guardarEjercicios,
        mostraEjercicio,
        buscarEjercicio,
        eliminarEjercicio,
        editarEjercicio

    }