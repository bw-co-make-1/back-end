const jwt = require('jsonwebtoken')
const secret = require('../config/secret.js')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, secret.jwtSecret, (error, decodedToken) => {
        if (error) {
          res.status(401).json({ message: 'Your are not allowed to touch it' })
        } else {
          req.decodedJwt = decodedToken
          next();
        }
      })
    } else {
      res.status(401).json({ message: 'Unauthorized. Please login.' })
    }
  }
  catch {
    res.status(401).json({ message:'Unauthorized. Please login.' })
  }
}