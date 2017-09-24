var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
	
	var pedido = req.body;
	pedido.id  = random();
	console.log(req.body);
	res.status(200).json(req.body);	
});

function random() {
	return Math.floor((Math.random() * 10000000) + 1);
}

module.exports = router;