const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const http = require('http').createServer(app);
const https = require('https');
const io = require('socket.io')(http);

var fs = require('fs');
var privateKey  = fs.readFileSync('ssl/server.key', 'utf8');
var certificate = fs.readFileSync('ssl/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};
var httpsServer = https.createServer(credentials, app);

const port = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Hello world!"});
});

io.on('connection', function(socket) {
    console.log('a user connected');
    socket.on('search', (data) => {
        console.log(data);
    })
})

require("./app/routes/student.routes.js")(app);
require("./app/routes/course.routes.js")(app);
require("./app/routes/student-course.routes.js")(app);

/*http.listen(port, () => {
    console.log("http Server is running on port: " + port);
})*/
httpsServer.listen(port, () => {
    console.log("https Server is running on port: " + port);
})