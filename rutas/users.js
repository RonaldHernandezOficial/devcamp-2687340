const express = require('express')
const router = express.Router()

//URI de bootcamps
//las uri también suelen llamarsen endpoints
//OBTENER TODOS LOS BOOTCAMPS

//USUARIOS

//OBTENER TODOS LOS USUARIOS
router.get( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todos los usuarios"
        })
})

//OBTENER TODOS LOS USUARIOS POR ID
router.get( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo usuarios con id ${ request.params.id }`
        })
})

//CREAR USUARIOS
router.post( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui se van a crear usuarios"
        })
})

//ACTUALIZAR USUARIOS
router.put( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando usuarios con id ${ request.params.id }`
        })
})

//ELIMINAR USUARIOS
router.delete( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando usuarios con id ${ request.params.id }`
        })
})

//Esportar(commonjs) router
module.exports = router
