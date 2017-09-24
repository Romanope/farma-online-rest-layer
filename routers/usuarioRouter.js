var express = require('express');
var router = express.Router();
var controllerUsuario = require('.././controllers/controllerUsuario');

router.post('/logar', function (req, res) {
	controllerUsuario.consultar(req.body.login, function (result) {
		console.log('result: ' + result);
		if (!result) {
			res.status(401).send("user not exists!");
			return;
		}
		var user = result;
		console.log('req.body.login = ' + req.body.login);
		console.log('req.body.senha = ' + req.body.senha);
		console.log('user.login = ' + user.login);
		console.log('user.senha = ' + user.senha);
		if (user.login == req.body.login && user.senha == req.body.senha) {
			res.status(200).send("user valid");
			return;
		}		
		res.status(401).send("user or password invalid!");
	});	
});

router.post('/', function (req, res) {
	controllerUsuario.inserir(req.body, function (result) {
		res.status(201).send('Number of records inserted: ' + result.affectedRows);
	});
});

module.exports = router;