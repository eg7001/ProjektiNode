const jwt = require('jsonwebtoken')

const authenticate =  (req,res,next) =>{
    try{
        const authHeader = req.header('Authorization')
        const token = authHeader.split(' ')[1]
        const decode = jwt.verify(token, 'sosiSekret')

        req.user = decode
        next()
    }
    catch(error){
        res.json({
            message: 'Authentication failed'
        })
    }
}

module.exports = authenticate