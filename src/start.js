// src/start.js
const app = require('./server');

const port = 3000; // Puedes usar cualquier puerto disponible

const server = app.listen(port, () => {
    console.log(`Webhook server listening at http://localhost:${port}`);
});

module.exports = server; // Exporta la instancia del servidor
