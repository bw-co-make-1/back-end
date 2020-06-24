const db = require('../../config/dbConfig.js')
module.exports = {
    getIssue,
    addIssue,
    updateIssue,
    deleteIssue,
    byId
}

function getIssue() {
    return db('issues as I')
    .join('users as U', 'U.id','I.user_id'  )
    // .where('I.user_id', '=', 'U.id')
    .select('I.id',
     'I.issue',
      'I.description',
       'I.photo',
        'I.city',
        'I.state',
         'I.zip_code',
          'U.username',
           'I.created_at')
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
    return db('issues as I')
    .join('users as U', 'U.id','I.user_id'  )
    .where('I.user_id', '=', id)
    .select('I.id',
     'I.issue',
      'I.description',
       'I.photo',
        'I.city',
        'I.state',
         'I.zip_code',
          'U.username',
           'I.created_at')
}