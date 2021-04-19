var express = require('express');
var router = express.Router();
var connection = require('../connection/connection')

router.get('/', function(request, response) {
	connection.query('SELECT * FROM post', function ( error, results, field){
		response.render("blog", {users: results });
	});			
});

module.exports = router;