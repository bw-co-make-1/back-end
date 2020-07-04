module.exports = (req, res, next) =>{
    const numbers = req.url.match(/[0-9]+/)
    if (!numbers) {
        res.status(400).json({ message: 'Only numbers 0-9' })
    }else{
        next()
    }
}