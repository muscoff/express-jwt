const router = require('express').Router()
const auth = require('../auth/auth')

const data = [
    {id: 1, name: "User 1"}, 
    {id: 2, name: "User 2"}, 
    {id: 3, name: "User 3"}
]

router.route('/')
.get(auth, (req, res)=>{
    res.json({data})
})

module.exports = router