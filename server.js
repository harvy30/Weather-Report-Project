var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 9005;
//env = Environment
app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }
  else {
    next();
  }
})
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Express server is up on PORT: ${PORT}`);
});

{/*
  very important to install this way only
 npm i css-loader@0.23.1 script-loader@0.6.1 style-loader@0.13.0 jquery@2.2.1
 foundation-sites@6.2.0 --save-dev
 npm i sass-loader@3.1.2 node-sass@3.4.2 --save-dev
 if it gives an error please install without the versions
 foundation-sites is breaking at version 6.3.0
*/}
