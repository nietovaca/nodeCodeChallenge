const request = require('supertest');
const io = require('../io')

describe("test get route", () => {
    test('GET /', (done) => {
        request(io)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
    })
  });