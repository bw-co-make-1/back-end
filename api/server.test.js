const server = require('./server.js')
const request = require('supertest')


describe('Server configuration', () => {
    test('Server is running', async () => {
        const res = await request(server).get('/');
        expect(res.body).toBe('Server is running...')
    })

    test("Should run in the testing environment", () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

})