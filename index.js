const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: true,
        credentials: true,
        method: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log("nuevo usuario conectado")

    socket.on("sendMessage", (messageInfo) => {
        socket.broadcast.emit("reciveMessage", messageInfo)
    });
});

app.get('/', (req, res) => {
    res.send('ya estoy aqui')
});

http.listen(3000, () => {
    console.log("te estoy escuchando")
});