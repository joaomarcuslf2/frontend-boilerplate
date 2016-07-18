var http = require('http');
var finalhandler = require('finalhandler');
var serveStatic = require('serve-static');
var serve = serveStatic("./");

const PORT = 8000;

var server = http.createServer(function (req, res) {
    var done = finalhandler(req, res);
    console.info("GET " + req.url);
    serve(req, res, done);
});
server.listen(PORT);
console.log('Server is running on http://localhost:' + PORT + '/');