var express = require('express');
var router = express.Router();
var controladorChamada = require('../controladorChamada')

router.post ('/', function (req, res) {
	
	console.log('Saving number in database.' + JSON.stringify(req.body));
	var numero = JSON.parse(JSON.stringify(req.body)).numero;
	console.log('number: ' + numero);
	
	controladorChamada.inserirNumero (numero, function (result, error) {
		if (result) {
			res.status(200).send('Number received with success!!!');
		} else {
			res.status(500).send(error);
		}
	});
});

router.get ('/', function (req, res) {
	
	controladorChamada.consultar (function (result) {
		console.log('retorno: ' + JSON.stringify(result));
		res.status(200).json(result);
	});
});

module.exports = router;