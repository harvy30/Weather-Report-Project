var express = require('express');

// Create our app
var app = express();
var port = process.env.PORT || 9005;
//env = Environment
app.use(Function (req, res, next){
  if(req.header['x-forwarded-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url)
  }
});

app.use(express.static('public'));

app.listen(port, function () {
  console.log(`Express server is up on port: ${port}`);
});
