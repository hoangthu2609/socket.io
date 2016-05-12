var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(9999,function(){
  console.log('listening on *:3000');
});
function handler(req, res) {
    if (req.url == '/css/style.css') {
        fs.readFile(__dirname + '/css/style.css',
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading ');
                }

                res.writeHead(200);
                res.end(data);
            });
    } else if (req.url == '/css/user_color.css') {
        fs.readFile(__dirname + '/css/user_color.css',
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading ');
                }

                res.writeHead(200);
                res.end(data);
            });
    } else if (req.url == '/index.html') {
        fs.readFile(__dirname + '/index.html',
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading index.html');
                }

                res.writeHead(200);
                res.end(data);
            });
    } else if (req.url == '/js/Username.class.js') {
        fs.readFile(__dirname + '/js/Username.class.js',
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading ');
                }

                res.writeHead(200);
                res.end(data);
            });
    } else if (req.url == '/client.js') {
        fs.readFile(__dirname + '/client.js',
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading ');
                }

                res.writeHead(200);
                res.end(data);
            });
    } else if (req.url == '/js/window.class.js') {
        fs.readFile(__dirname + '/js/window.class.js',
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading ');
                }

                res.writeHead(200);
                res.end(data);
            });
    } else if (req.url == '/js/index.js') {
        fs.readFile(__dirname + '/js/index.js',
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading ');
                }

                res.writeHead(200);
                res.end(data);
            });
    } else {
        fs.readFile(__dirname + '/dangnhap.html',
            function(err, data) {
                if (err) {
                    res.writeHead(500);
                    return res.end('Error loading dangnhap.html');
                }

                res.writeHead(200);
                res.end(data);
            });
    }
};

var userDB = {};

io.on('connection', function(socket) {
    socket.on('user', function(addUsername) {
        console.log(userDB)
        userDB[addUsername.id] = addUsername.name;
        //io.emit('user', addUsername);

        io.emit('info', {id: addUsername.id, name: addUsername.name});
    });
    socket.on('chat', function(message) {
        //io.emit('chat', message);
        var news = { message: message.message, name: userDB[message.id], id: message.id};
        io.emit('news', news);
        console.log('chat message:', news);
    });
    socket.emit('welcome_info', "<li class=\"log\"> <font> 'Welcome chat demo!'</font></li>");
});
