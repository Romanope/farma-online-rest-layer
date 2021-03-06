var express        = require('express');
var app            = express();
var contatoRouters  = require('./routers/contatoRouters');
var bodyParser     = require('body-parser');
var path       	   = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.use('/farmaonline/contato', contatoRouters);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3001, function () {
	console.log("server running in port 3001");
});