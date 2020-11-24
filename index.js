const express = require('express');
require('dotenv').config();

// Crear servidor express
const app = express();

// console.log(process.env);


// Acceso al directorio publico
app.use(express.static('public'));

// Rutas 
app.use('/api/auth', require('./routes/auth'));

// Configuracion del puerto 
app.listen(process.env.PORT, () => {
    console.log(`Backend corriendo en el puerto ${process.env.PORT}`);    
})