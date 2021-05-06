const express = require('express')
const cors = require('cors')
const server = express()
require('dotenv').config()
server.use(cors())
server.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes')
const UserRoutes = require('./routes/UserRoutes')

server.use('/task', TaskRoutes)
server.use('/user', UserRoutes)
var port = (process.env.PORT || 3002)

server.listen(port, () => {

    console.log('Api Online')
})

