const server = require('./server.js')
const db = require('../config/dbConfig.js')
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

describe('End Points', () => {
    test('Accounts', async () => {
        const allUsers = await db('users')
        const res = await request(server).get('/api/account')
        expect(res.type).toEqual('application/json')
        expect(allUsers).toHaveLength(0)
        expect(res.status).toEqual(401)
    })

    test('Issues', async () => {
        const allIssues = await db('issues')
        const res = await request(server).get('/api/Issue')
        expect(res.type).toEqual('application/json')
        expect(allIssues).toHaveLength(0)
        expect(res.status).toEqual(401)
    })

    test('Comments', async () => {
        const allComments = await db('comments')
        const res = await request(server).get('/api/Comment')
        expect(res.type).toEqual('application/json')
        expect(allComments).toHaveLength(0)
        expect(res.status).toEqual(401)
    })

    test('Votes', async () => {
        const allVotes = await db('votes')
        const res = await request(server).get('/api/Vote')
        expect(res.type).toEqual('application/json')
        expect(allVotes).toHaveLength(0)
        expect(res.status).toEqual(401)
    })
}
)

beforeEach(async () => {
    await db('users').truncate();
})

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