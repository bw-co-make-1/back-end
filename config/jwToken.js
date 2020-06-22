//Function to Generate Token
const secret = require('./secret.js')
const jwt = require('jsonwebtoken')
module.exports = {
    generateToken
}
function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        first_name: `Welcome ${user.first_name}`,
        is_admin: user.is_admin
    }
    const options = {
        expiresIn: "7d"
    };

    return jwt.sign(payload, secret.jwtSecret, options)
}