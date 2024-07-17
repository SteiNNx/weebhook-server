// test/server.test.js
const request = require('supertest');
const app = require('../src/server.js');
const { expect } = require('chai');

describe('Webhook Server', () => {
    it('should respond with 200 and a success message when receiving a webhook', (done) => {
        request(app)
            .post('/api/v1/openwebhook/webhook')
            .send({ message: 'Hello, webhook!' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /text\/html/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.text).to.equal('Webhook received successfully');
                done();
            });
    });
});
