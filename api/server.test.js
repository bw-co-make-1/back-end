const server = require('./server.js')
const request = require('supertest')

const db = require('../config/dbConfig.js')

const accountData = require('../data/dummyData/account.js')
const issueData = require('../data/dummyData/issue.js')
const commentData = require('../data/dummyData/comment.js')

const Accounts = require('../routes/auth/auth-model.js')
const Issues = require('../routes/issues/issue-model.js')
const Comments = require('../routes/comments/comment-model.js')

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
        expect(res.status).toEqual(200)
    })

    test('Issues', async () => {
        const allIssues = await db('issues')
        const res = await request(server).get('/api/Issue')
        expect(res.type).toEqual('application/json')
        expect(allIssues).toHaveLength(0)
        expect(res.status).toEqual(200)
    })

    test('Comments', async () => {
        const allComments = await db('comments')
        const res = await request(server).get('/api/Comment')
        expect(res.type).toEqual('application/json')
        expect(allComments).toHaveLength(0)
        expect(res.status).toEqual(200)
    })

    test('Votes', async () => {
        const allVotes = await db('votes')
        const res = await request(server).get('/api/Vote')
        expect(res.type).toEqual('application/json')
        expect(allVotes).toHaveLength(0)
        expect(res.status).toEqual(200)
    })
}
)

describe('Accounts', () => {
    
    it("Should insert account to the DB", async () => {
        await Accounts.addUser(accountData[0]);
        const users = await db("users");
        expect(users).toHaveLength(1);
    });

    it("Should Get accounts information frm DB", async () => {
        const users = await db("users");
        expect(users).toHaveLength(0);
    });
});

describe('Issues', () => {
    
    it("Should insert issue to the DB", async () => {
        await Issues.addIssue(issueData[0]);
        const issue = await db("issues");
        expect(issue).toHaveLength(1);
    });

    it("Should Get issues information frm DB", async () => {
        const issue = await db("issues");
        expect(issue).toHaveLength(0);
    });
});

describe('Comments', () => {
    
    it("Should insert comment to the DB", async () => {
        await Comments.addComment(commentData[0]);
        const comment = await db("comments");
        expect(comment).toHaveLength(1);
    });

    it("Should Get comments information frm DB", async () => {
        const comment = await db("comments");
        expect(comment).toHaveLength(0);
    });
});

beforeEach(async () => {
    await db('users').truncate();
    await db('issues').truncate()
    await db('comments').truncate()
})
