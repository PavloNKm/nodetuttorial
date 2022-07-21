var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');
var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
  //res.write("The date and time are currently: " + dt.myDateTime() + "<br/>");
  //var q = url.parse(req.url, true).query;
  //var txt = q.year + " " + q.month;
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
  });
  //res.end(txt);
}).listen(8080); 