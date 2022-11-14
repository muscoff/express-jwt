const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/entry'))
app.use('/users', require('./routes/users'))

const server = http.createServer(app)

server.listen(port, ()=>console.log(`Server running on http://localhost:${port}`))