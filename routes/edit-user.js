var express = require('express');
var router = express.Router();
var connection = require('../connection/connection')
var path = require('path');

router.get('/edit/:id', function(request, response) {
    var id = request.params.id;
    connection.query('SELECT * FROM accounts WHERE id = ?',[id], function(error, results, fields){
        if (!error){
            response.render("user/edit", {user: results[0]}); 
        } else {
      console.log(error);       
        }
    })
});

router.post('/edit/:id', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var id = request.params.id;
    var photo = request.files.profilePhoto;
    var fileName = photo.name;

    photo.mv('./files/photos/'+ fileName);
    connection.query('UPDATE accounts SET username =?, password =?, email =?, profilePicture =? WHERE id = ?',[username,password,email,fileName,id], function(error, results, fields){
        if (!error){
            response.redirect("/admin"); 
        } else {
      console.log(error);       
        }
    })
});

module.exports = router; 