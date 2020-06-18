function checkIsAdmin(admin) {
    return function (req, res, next) {
        if (req.decodedJwt.is_admin && req.decodedJwt.is_admin === admin) {
            next()
        } else {
            res.status(403).json({ you: 'do not have the power' })
        }
    }
}

module.exports = checkIsAdmin