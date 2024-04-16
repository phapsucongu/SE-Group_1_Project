const express = require('express');
const router = express.Router();
const app = express(); // Sử dụng express để tạo app

const { Server } = require('socket.io')
const http = require('http').Server(app); // Sử dụng express để tạo server HTTP

const io = new Server(http);

router.get('/', (req, res) => {
    res.sendFile(__dirname+"/test.html");
});

io.on('connection', (socket) => {
    console.log('a user connected');
})

module.exports = router;