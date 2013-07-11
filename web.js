var express = require('express');
var fs      = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  infile = "index.html";
  buffer = fs.readFileSync(infile).toString();
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
