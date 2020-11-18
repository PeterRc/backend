const express = require('express');

// Crear servidor express
const app = express();

// Configuracion del puerto 
app.listen(4000, () => {
    console.log(`Backend corriendo en el puerto ${4000}`);    
})