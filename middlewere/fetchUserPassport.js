const fetchUserPassport = (req, res, next)=>{
    if(req.user) next();

    return res.status(401).json({
        message: 'You are not logged in'
    });
}


module.exports = fetchUserPassport