var express        = require('express');
var app            = express();
var usuarioRouter  = require('./routers/usuarioRouter');
var produtoRouter  = require('./routers/produtoRouter');
var pedidoRouter  = require('./routers/pedidoRouter');
var bodyParser     = require('body-parser');
var path       	   = require('path');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());

app.use('/usuario', usuarioRouter);
app.use('/produto', produtoRouter);
app.use('/pedido', pedidoRouter);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
	console.log("server running in port 3000");
});