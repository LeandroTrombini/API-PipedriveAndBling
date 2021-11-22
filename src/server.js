const express = require('express')
const cors = require('cors')
const dbconnect = require('./database/Connection')
const routes = require('./routes')

const server = express()



dbconnect();

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(routes)

server.listen(8080, () => {
    console.log("server online...")
})