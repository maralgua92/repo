var express = require('express');
var router = express.Router();
var connection = require('../connection/connection')
var path = require('path');

router.get('/submit', function(request, response) {
    response.render("user/submit");
});

router.post('/submit',function(request, response){
    var username = request.body.username;
    var password = request.body.password;
    var email = request.body.email;
    var photo = request.files.profilePhoto;
    var fileName = photo.name;

    photo.mv('./files/photos/' + fileName);


    if(username && password && email) {
        connection.query('INSERT INTO accounts ( username, password, email, profilePicture) VALUES(?,?,?,?)',[username, password, email, fileName], 
        function(error, results, fields){
            if (!error){
                response.redirect('/admin'); 
            } else {
          console.log(error);       
            }
        });
    }  
});
module.exports = router;  

