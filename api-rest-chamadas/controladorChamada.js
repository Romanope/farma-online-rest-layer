var pool = require('./db-connect/connect-mysql');
 
var controladorChamada =  {
	inserirNumero: function (numero, callback) {

		var insert = "INSERT INTO numero (NUM_NR) VALUES (?);";
		var params = [numero];
		
		pool.getConnection(function(err, connection) {
	    	// Use the connection
		    connection.query(insert, params, function (err, result) {
		    	// And done with the connection.
			    connection.release();

			    // Handle error after the release.
			    if (err) {
			    	callback(false, err);
			    } else {
			    	callback(true, err);
			    }
			});
		});
	},
	consultar: function (callback) {
		var select = 'select num_nr as numero from numero'
		pool.getConnection(function(err, connection) {
	    	// Use the connection
		    connection.query(select, function (error, results, fields) {
		    	// And done with the connection.
			    connection.release();
			    // Handle error after the release.
			    if (error) throw error;
			    /*for (var i = 0; i < results.length; i++) {
			    	results[i].preco = currencyFormatter.format(results[i].preco, { locale: 'pt-BR' });
			    }*/
			   	callback(results);
			});
		});
	} 
}
module.exports = controladorChamada;