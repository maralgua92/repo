var express = require('express');
var router = express.Router();
var connection = require('../connection/connection')
var path = require('path');

router.get('/pedit/:id', function(request, response) {
    var id = request.params.id;
    connection.query('SELECT * FROM post WHERE id = ?',[id], function(error, results, fields){
        if (!error){
            response.render("post/pedit", {user: results[0]}); 
        } else {
      console.log(error);       
        }
    })
});

router.post('/pedit/:id', function(request, response) {
    var title = request.body.title;
    var intro = request.body.intro;
    var text = request.body.text;
    var id = request.params.id;
    var photo = request.files.profilePhoto;
    var fileName = photo.name;

    photo.mv('./files/photos/'+ fileName);
    connection.query('UPDATE post SET title =?, intro =?, text =?, profilePicture =? WHERE id = ?',[title,intro,text,fileName,id], function(error, results, fields){
        if (!error){
            response.redirect("/post"); 
        } else {
      console.log(error);       
        }
    })
});

module.exports = router; 