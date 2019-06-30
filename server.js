'use strict';

const io = require('socket.io')(process.env.PORT);

io.on('connection', socket => {
  console.log('Connected', socket.id);

  socket.on('chat', payload => {
    console.log('broadcast', payload);
    io.emit('incoming', payload);
  });
});
