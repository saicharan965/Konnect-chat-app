const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { Console } = require('console');

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
  console.log('A connection has started');
});

app.get('/', (req, res) => res.send("Nothing here...it's just a server"));
server.listen(PORT, () => {
  console.log('Server started on port:3000');
});
