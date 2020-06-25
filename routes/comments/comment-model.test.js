const db = require('../../config/dbConfig')
const commentModel = require('./comment-model')

const testCommentData = {
    comment: 'This is a test comment from /routes/comments/comment-model.test.js', 
    user_id: 1, 
    issue_id: 1 
}

const testCommentUpdateData = {
    comment: 'This is an updated test comment from /routes/comments/comment-model.test.js'
}

describe("comment model", () => {
    // run database seeds
    beforeEach(async () => {
        await db.seed.run()
    })

    // destroy the database after testing is done
    afterAll(async () => {
        await db.destroy()
    })

    test("Get all comments for specified issue.", async () => {
        const res = await commentModel.getAllComments(1)
        expect(res.length).toBe(1)
    })

    test("Get single comment by specified id.", async () => {
        const res = await commentModel.getSingleComment(1)
        expect(res.length).toBe(1)
    })

    test("Add a new comment to the database.", async () => {
        const res = await commentModel.postNewComment(testCommentData)
        expect(res.id).toBe(2)
    })

    test("Update a comment by id.", async () => {
        const res = await commentModel.putComment(2, testCommentData)
        expect(res.user_id).toBe(1)
    })

    test("Delete a comment by id.", async () => {
        const res = await commentModel.deleteComment(2)
        expect(res).toHaveLength(0)
    })
})