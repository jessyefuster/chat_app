const port = 8090
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const _ = require('underscore')


app.get('/', (req, res) => {
	res.setHeader('Content-Type', 'text/plain')
	res.sendFile(__dirname + '/README.md')
})


http.listen(port, () => console.log(`Listening on port ${port}! Go to http://localhost:${port}/`))
