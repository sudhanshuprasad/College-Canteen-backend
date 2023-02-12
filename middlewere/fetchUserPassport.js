const isUserAuthenticated = (req, res, next)=>{
    // console.log("session is ",req.session.passport.user)
    console.log("user from middleware", req.user)
    if(req.user) {

        next();
    }

    return res.status(401).json({
        message: 'You are not logged in'
    });
}


module.exports = isUserAuthenticated;