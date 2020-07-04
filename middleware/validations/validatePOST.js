module.exports = (req, res, next) =>{
    const body = req.body;

    if (!Object.keys(body).length){
        res.status(400).json({message: 'Missing Data'})
    }else{
        next()
    }
}