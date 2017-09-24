var express = require('express');
var router = express.Router();
var controllerProduto = require('.././controllers/controllerProduto');

router.get('/', function (req, res) {
	controllerProduto.consultar(function (result) {
		console.log('result: ' + result);
		res.status(200).json(result);
	});	
});

module.exports = router;