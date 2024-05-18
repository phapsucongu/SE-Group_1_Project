/*const express = require('express');
const chatRouter = express(); // Sử dụng express để tạo app

const http = require('http')
//const server = http.createServer(chat);
const { Server } = require("socket.io");
//const io = new Server(server);

chatRouter.get('/', (req, res) => {
    res.sendFile(__dirname+'/test.html');
});

server.listen(3000, () => {
    console.log('listening on port:3000');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('on-chat', data => {
        io.emit('user-chat', data);
    });
});
module.exports = chatRouter;*/