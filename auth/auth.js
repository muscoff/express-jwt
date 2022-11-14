const jwt = require('jsonwebtoken')
const jwt_algorithm = require('./jwt_algorithm').algorithm

const auth = (req, res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    jwt.verify(token, jwt_algorithm, (err, decoded)=>{
        if(err){
            res.status(400).json({message: "Unauthorized request"})
        }else{
            next()
        }
    })
}

module.exports = auth