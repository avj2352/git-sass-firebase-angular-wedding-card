var express  = require('express');
var app = express();

app.use('/', express.static('dist'));

var PORT = process.env.PORT || 5000;
var server = app.listen(PORT, function(){
    console.log('Server listening at port: ', server.address().port);
});