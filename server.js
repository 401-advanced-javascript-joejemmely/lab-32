'use strict';

const express = require('express');
const socketIO = require('socket.io');

const PORT = process.env.PORT || 3000;

const server = express()
  .use((req, res) => res.send('asdf'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server);

io.on('connection', socket => {
  console.log('Connected', socket.id);

  socket.on('chat', payload => {
    console.log('broadcast', payload);
    io.emit('incoming', payload);
  });
});
