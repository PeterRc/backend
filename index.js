const express = require('express');
require('dotenv').config();

// Crear servidor express
const app = express();

console.log(process.env);


// Acceso al directorio publico
app.use(express.static('public'));

// Rutas 
// app.get('/', (req, res) => {
//     console.log('Se recibió una petición en /');
//     res.json({
//         ok: true,
//         msg: "Recibido",
//     });
// }
// );

// Configuracion del puerto 
app.listen(process.env.PORT, () => {
    console.log(`Backend corriendo en el puerto ${process.env.PORT}`);    
})