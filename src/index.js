const express = require('express')
const cors = require('cors')
const server = express()
server.use(cors())
server.use(express.json())

const TaskRoutes = require('./routes/TaskRoutes')
const UserRoutes = require('./routes/UserRoutes')

server.use('/task', TaskRoutes)
server.use('/user', UserRoutes)

server.listen(3002, () => {

    console.log('Api Online')
})

