var pool = require('.././db-connect/connect-mysql');
var currencyFormatter = require('currency-formatter');
 
var controllerProduto =  {
	consultar: function (callback) {
		var select = 'select f.far_nm as empresa, p.pro_ds as descricao, pf.pfa_prc as preco, p.pro_nm_imagem as nomeImagem, f.FAR_NR_FONE as fone, ' + 
						'f.FAR_NM_LOGO as nomeLogoFarmacia, end.end_rua as rua, end.end_nr as nrEndereco, end.end_bairro as bairro, end.end_cidade as cidade, ' + 
						'end.end_lat as latitude, end.end_long as longitude ' + 
						'from produto_farmacia pf ' + 
						'inner join produto p on p.pro_id = pf.pro_id ' + 
						'inner join farmacia f on f.far_id = pf.far_id ' + 
						'inner join endereco end on end.end_id = f.end_id ' + 
						'order by pf.far_id;'
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
module.exports = controllerProduto;