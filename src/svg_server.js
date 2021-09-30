require("babel-register");
var express = require('express');
var app = express();
var svgRenderer = require('./utils/svg_renderer').default;

app.get('/svg', function (req, res) {
  var svg = svgRenderer();
  res.send(svg);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
