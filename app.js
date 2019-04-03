var express = require("express");
var logger = require('morgan');
var path = require("path")
var bodyParser = require('body-parser');
var app = express();
var server = require("http").createServer(app)
var io = require('socket.io')(server);

server.listen(8080, function () {
    console.log("check port 8080");
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {
    res.render("index");
})

app.post("/realtime", function(req, res){
    var result = JSON.parse(req.body.result)
    console.log(result);
    io.sockets.emit('level', result);
    res.send(200);
})

io.sockets.on('connection', function (socket) {
    console.log(" connected");

    socket.on("works", function (data) {
        console.log(data);
    })
})