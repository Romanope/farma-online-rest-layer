var express = require('express');
var router = express.Router();
var controllerUsuario = require('.././controllers/controllerUsuario');

router.get ('/', function (req, res) {
	var dadosFarmaOnlie = {
		nome: 'Farma Online',
		cnpj: '99.999.999/9999-99',
		rua: 'Av. Conde da Boa Vista',
		numero: '100',
		bairro: 'Centro',
		cidade: 'Recife',
		estado: 'PE',
		latitude: '-8.061160',
		longitude: '-34.882442',
		endereco: 'Av. Conde da Boa Vista' + ', 100, Centro - Recife/PE'
	}

	res.status(401).json(dadosFarmaOnlie);
});

module.exports = router;