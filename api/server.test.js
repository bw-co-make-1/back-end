const server = require('./server.js')
// const db = require('../database/dbConfig.js')
const request = require('supertest')
// const Users = require('../auth/auth-model.js')
// const mockData = require('../config/mockData.js')


describe('Server configuration', () => {
    test('Server is running', async () => {
        const res = await request(server).get('/');
        expect(res.body).toBe('Server is running...')
    })

    test("Should run in the testing environment", () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

})

// describe('End Points', () => {
//     test('Users', async () => {
//         const allUsers = await db('users')
//         const res = await request(server).get('/api/Users')
//         expect(res.type).toEqual('application/json')
//         expect(allUsers).toHaveLength(0)
//         expect(res.status).toEqual(401)
//     })

// }
// )


// describe("insert()", () => {
//     it("", () => { });
//     beforeEach(async () => {
//         await db("users").truncate();
//     })
//     it("should insert a user to the DB", async () => {
//         await Users.addUser(mockData[0]);
//         await Users.addUser(mockData[1]);

//         const users = await db("users");
//         expect(users).toHaveLength(2);
//     });
// });


// beforeEach(async () => {
//     await db('users').truncate();
// })