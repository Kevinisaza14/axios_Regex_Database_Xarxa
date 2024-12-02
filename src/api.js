const express = require('express'); // importamos express
const cors = require("cors"); // importamos cors para permitir peticiones desde cualquier origen
require("dotenv").config(); // importamos la configuración de entorno process.env.
const api = new express(); // creamos una nueva instancia de express
const apixarxa = require('./routes/api.routes.js'); // importamos las rutas de prueba

//configurar middlewares
api.use(express.json());
api.use(cors()); // mejora problemas en cabeceras CORS
api.use('/api/v1', apixarxa); // montamos las rutas en /api/v1
api.use((req, res) => {
    res.status(404).json({
        message: "Ruta no encontrada",
        error: "Error 404"
    });
});

const PORT = process.env.PORT || 3000;
api.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});