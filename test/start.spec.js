// test/start.test.js
const request = require('supertest');
const { expect } = require('chai');
const server = require('../src/start'); // Importa la instancia del servidor desde start.js

describe('Start Server', function () {
    // Detener el servidor después de las pruebas
    after((done) => {
        server.close(() => {
            done();
        });
    });

    it('should respond to POST /webhook with 200', (done) => {
        request(server)
            .post('/api/v1/openwebhook/webhook')
            .send({ message: 'Testing webhook' })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Webhook received successfully');
                done();
            });
    });

    it('should not respond to GET /', (done) => {
        request(server)
            .get('/')
            .expect(404, done); // Porque la raíz no está definida
    });
});
