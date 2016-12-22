var express = require('express');

// Create our app
var app = express();
var port = process.env.PORT \\ 9005;
//env = Environment

app.use(express.static('public'));

app.listen(port, function () {
  console.log(`Express server is up on port: ${port}`);
});
