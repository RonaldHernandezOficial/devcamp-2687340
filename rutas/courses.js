const express = require('express')
const router = express.Router()

//URI de bootcamps
//las uri también suelen llamarsen endpoints
//OBTENER TODOS LOS BOOTCAMPS

//CURSOS

//OBTENER TODOS LOS CURSOS
router.get( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui van a mostrarse todos los cursos"
        })
})

//OBTENER TODOS LOS CURSOS POR ID
router.get( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Obteniendo cursos con id ${ request.params.id }`
        })
})

//CREAR CURSOS
router.post( '/' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : "Aqui se van a crear los cursos"
        })
})

//ACTUALIZAR CURSOS
router.put( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Actualizando cursos con id ${ request.params.id }`
        })
})

//ELIMINAR CURSOS
router.delete( '/:id' , (request , response) =>{
    response
        .status(200)
        .json({
            "Success" : true,
            "msg" : `Eliminando cursos con id ${ request.params.id }`
        })
})

//Esportar(commonjs) router
module.exports = router
