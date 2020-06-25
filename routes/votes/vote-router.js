const router = require('express').Router();
const Votes = require('./vote-model')
const jwt = require("jsonwebtoken")

router.get('/:issueId', async (req, res) => {
    await Votes.getVotesByIssue(req.params.issueId)
    .then(votes => {
      res.status(200).json(votes)
    })
    .catch(err => res.send(err))
})

router.post('/:issueId', async (req, res) => {
  const user = jwt.decode(req.headers.authorization)

  await Votes.postVotesByIssue(req.params.issueId, user.subject)
  .then(votes => {
    res.status(200).json(votes)
  })
  .catch(err => res.send(err))
})

module.exports = router