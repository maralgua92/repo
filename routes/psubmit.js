var express = require('express');
var router = express.Router();
var connection = require('../connection/connection')
var path = require('path');

router.get('/psubmit', function(request, response) {
    response.render("post/psubmit");
});

router.post('/psubmit',function(request, response){
    var title = request.body.title;
    var intro = request.body.intro;
    var text = request.body.text;
    var photo = request.files.profilePhoto;
    var fileName = photo.name;

    photo.mv('./files/photos/' + fileName);


    if(title && intro && text) {
        connection.query('INSERT INTO post ( title, intro, text, profilePicture) VALUES(?,?,?,?)',[title, intro, text, fileName], 
        function(error, results, fields){
            if (!error){
                response.redirect('/post'); 
            } else {
          console.log(error);       
            }
        });
    }  
});
module.exports = router;  

