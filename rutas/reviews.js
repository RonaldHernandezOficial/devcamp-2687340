const express = require('express')
const router = express.Router()

//URI de bootcamps
//las uri también suelen llamarsen endpoints
//OBTENER TODOS LOS BOOTCAMPS

//OPINIONES

//OBTENER TODAS LAS OPINIONES
router.get( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todas las opiniones"
        })
})

//OBTENER TODAS LAS OPINIONES POR ID
router.get( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo opiniones con id ${ request.params.id }`
        })
})

//CREAR OPINIONES
router.post( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui se van a crear las opiniones"
        })
})

//ACTUALIZAR OPINIONES
router.put( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando opiniones con id ${ request.params.id }`
        })
})

//ELIMINAR OPINIONES
router.delete( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando opiniones con id ${ request.params.id }`
        })
})

//Esportar(commonjs) router
module.exports = router
