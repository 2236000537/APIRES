const mongoose = require ('mongoose')
const config =require ('./configuracion')

module.exports={
    connection  : null,
    connect : ()=>{
        if(this.connection) return this.connection
        return mongoose.connect(config.DB)
        .then(conn =>{
            this.connect = conn
            console.log ('Se conecto de manera correcta');

        })
        .catch(e =>{console.log('errpr en la conexion', e)})
    }
}