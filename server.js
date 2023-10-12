const express = require('express')

//CREAR EL OBJETO PRINCIPAL DE LA API CON EXPRESS
const app = express()

//URL DE PRUEBA
app.get( '/prueba' , function(request , response){
        response.send("Hola")
})

app.get( '/prueba2' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true
        })
})

//CREAR EL SERVIDOR DE APLICACIÓN
app.listen(5000 , 
        console.log('Servidor ejecutando en puerto' + 5000))