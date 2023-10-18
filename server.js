const express = require('express')

//Conexión con las rutas
//Rutas de bootcamps
const bootcampRoutes = require('./rutas/bootcamps')

const usersRoutes = require('./rutas/users')

const coursesRoutes = require('./rutas/courses')

const reviewsRoutes = require('./rutas/reviews')

//CREAR EL OBJETO PRINCIPAL DE LA API CON EXPRESS
const app = express()   

//Vincular rutas al objeto app

//BOOTCAMPS
app.use("/api/v1/devcamp/bootcamps", bootcampRoutes)

app.post("/api/v1/devcamp/bootcamps", bootcampRoutes)

app.put("/api/v1/devcamp/bootcamps", bootcampRoutes)

app.delete("/api/v1/devcamp/bootcamps", bootcampRoutes)

//USUARIOS

app.use("/api/v1/devcamp/usuarios", usersRoutes)

app.post("/api/v1/devcamp/usuarios", usersRoutes)

app.put("/api/v1/devcamp/usuarios", usersRoutes)

app.delete("/api/v1/devcamp/usuarios", usersRoutes)

//CURSOS

app.use("/api/v1/devcamp/cursos", coursesRoutes)

app.post("/api/v1/devcamp/cursos", coursesRoutes)

app.put("/api/v1/devcamp/cursos", coursesRoutes)

app.delete("/api/v1/devcamp/cursos", coursesRoutes)

//OPINIONES

app.use("/api/v1/devcamp/opiniones", reviewsRoutes)

app.post("/api/v1/devcamp/opiniones", reviewsRoutes)

app.put("/api/v1/devcamp/opiniones", reviewsRoutes)

app.delete("/api/v1/devcamp/opiniones", reviewsRoutes)

//CREAR EL SERVIDOR DE APLICACIÓN
app.listen(5000 , 
        console.log('Servidor ejecutando en puerto' + 5000))