function checkIsAdmin() {
    return function (req, res, next) {
        if (req.decodedJwt.is_admin && req.decodedJwt.is_admin === true) {
            next()
        } else {
            res.status(403).json({ you: 'You need to login as Admin' })
        }
    }
}

module.exports = checkIsAdmin