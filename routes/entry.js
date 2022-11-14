const router = require('express').Router()
const jwt = require('jsonwebtoken')
const jwt_algorithm = require('../auth/jwt_algorithm').algorithm
const path = require('path')

const db = [
    {username: 'admin', password: 'admin'},
    {username: 'user', password: 'pass'}
]

router.route('/')
.get((req, res) => {
    // res.json({message: 'Node server running successfully'})
    // res.sendFile(path.join(__dirname, 'public', 'index.htm'))
    res.sendFile('index.htm')
})

router.post('/login',(req, res) => {
    const findUser = db.find(item=>item.username == req.body.username)

    if(findUser){
        if (findUser.password == req.body.password){
            const token = jwt.sign(req.body, jwt_algorithm)
            res.json({token})
        }else{
            res.status(400).json({message: "Invalid username or password"})
        }
    }else{
        res.status(400).json({message: "There is no account for this user"})
    }
})

module.exports = router