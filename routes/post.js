var express = require('express');
var router = express.Router();
var connection = require('../connection/connection')

router.get('/post', function(request, response) {
		connection.query('SELECT * FROM post', function ( error, results, field){
			console.log(results);
		response.render("post", {users: results });
		});
}); 



router.get('/logout', function(request, response) {
	request.session.loggedin = false;
	request.session.username = null;
	response.redirect('/login');
});

module.exports = router; 