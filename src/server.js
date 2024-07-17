// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Middleware para parsear JSON
app.use(bodyParser.json());

// Ruta para recibir el webhook
app.post('/api/v1/openwebhook/webhook', (req, res) => {
    const body = req.body;
    console.log('Webhook received:', body);

    // Responde al webhook
    res.status(200)
        .send('Webhook received successfully');
});

module.exports = app; // Exporta el app para las pruebas
