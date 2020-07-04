module.exports = (req, res, next) =>{
    const body = req.body;

    if (!body.issue){
        res.status(400).json({message: 'Missing issue'})
    }
    if(!body.description){
        res.status(400).json({message: 'Missing description'})
    }
    if(!body.photo){
        res.status(400).json({message: 'Missing photo link'})
    }
    if(!body.city){
        res.status(400).json({message: 'Missing city'})
    }
    if(!body.state){
        res.status(400).json({message: 'Missing state'})
    }
    if(!body.zip_code){
        res.status(400).json({message: 'Missing Zip code'})
    } else{
        next()
    }
}