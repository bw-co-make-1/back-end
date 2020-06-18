const router = require('express').Router();
const Users = require('./user-model.js')

router.get('/', async (req, res) => {
    try {
        const found = await Users.getUsers()
        if (found) {
            res.status(200).json(found)
        } else {
            res.status(401).json('No User to Display')
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = router