module.exports = (req, res, next) =>{
    const body = req.body;

    if (!body.comment){
        res.status(400).json({message: 'Missing Comment'})
    } else{
        next()
    }
}