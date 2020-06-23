const db = require('../../config/dbConfig.js')
module.exports = {
    getIssue,
    addIssue,
    updateIssue,
    deleteIssue,
    byId
}

function getIssue() {
    return db('issues')
}

function addIssue(issue) {
    return db('issues')
    .insert(issue)
}

function updateIssue(id, changes) {
    return db('issues')
    .where({id})
    .update(changes)
}

function deleteIssue(id) {
    return db('issues')
    .where({id})
    .del()
}

function byId(id){
    return db('issues')
    .where(id)
    .orderBy('id')
}