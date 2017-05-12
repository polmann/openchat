var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.redirect('/login');
});

app.post('/', function (req, res) {
    console.log(req.body);
    console.log(req.cookies);
    res.cookie('username', req.body.username);
    res.sendFile(__dirname + '/index.html');
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});


var connectedUsers = {};

io.on('connection', function (socket) {

    socket.on('hello', function (user) {
        socket.emit('usersonline', connectedUsers);
        connectedUsers[socket.id] = user;
        socket.broadcast.emit('userconnected', user);
        socket.broadcast.emit('chat', user + ' is connected');
    });

    socket.on('typing', function () {
        var user = connectedUsers[socket.id];
        user = (user) ? user : 'anonymous';
        socket.broadcast.emit('typing', user);
    });

    socket.on('chat', function (msg) {
        var user = connectedUsers[socket.id];
        user = (user) ? user : 'anonymous';
        socket.broadcast.emit('chat', user + ' - ' + msg);
    });

    socket.on('disconnect', function () {
        var user = connectedUsers[socket.id];
        socket.broadcast.emit('userdisconnected', user);
        socket.broadcast.emit('chat', 'user ' + user + ' disconnected');
        delete user;
    });

});

http.listen(3000, function () {
    console.log('listening on *:3000');
});