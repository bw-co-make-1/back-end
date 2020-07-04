module.exports = (req, res, next) =>{
    const body = req.body;

    if (!body.username){
        res.status(400).json({message: 'Missing username'})
    }
    if(!body.password){
        res.status(400).json({message: 'Missing password'})
    }else{
        next()
    }
}