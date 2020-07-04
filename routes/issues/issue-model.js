const db = require('../../config/dbConfig.js')
module.exports = {
    getIssue,
    addIssue,
    updateIssue,
    deleteIssue,
    byId,
    getSingleIssue
}

function getSingleIssue(id) {
    return db('issues')
    .where({id})
    .first()
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
    let query = db('issues as I')
    .join('users as U', 'U.id','I.user_id'  )
    .select('I.id',
     'I.issue',
      'I.description',
       'I.photo',
        'I.city',
        'I.state',
         'I.zip_code',
          'U.username',
           'I.created_at')

        if(id){
            query.where('I.id', id).first();

            const promises = [query, getCommentsByIssue(id), getVotesByIssue(id)];
            return Promise.all(promises).then(function (results){
                let [issue, comments, votes] = results;
                if(issue){
                     issue.comments = comments;
                      issue.votes = votes;
                      return issue;
                 }else{
                     return null
                 }
             })
        }else{
             return null;
            }
}

function getCommentsByIssue(issue_id){
    // return null;
    return db('issues as I')
    .join('comments as C', 'C.issue_id','I.id'  )
    .where('C.issue_id', '=', issue_id)
    .select('C.id',
     'I.issue',
     'C.comment'
      )
}

function getVotesByIssue(issue_id){
    // return null;
    return  db('votes as V')
    .join('issues as I', 'issue_id','I.id')
    .where('V.issue_id', '=', issue_id)
    .select('I.issue', 'V.upVoted')
}