
module.exports = function restricted(req, res, next) {

    if(req.session && req.session.user){
        next()
    }else {
        res.status(401).json({message: 'No credentials provided, You shall not pass'})
    }
}