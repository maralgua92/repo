var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv');
var ejs = require('ejs');
var fileUpload = require('express-fileupload');

//local routes
const login = require('./routes/login');
const admin = require('./routes/admin');
const register = require('./routes/register');
const blog = require('./routes/blog');
const submit = require('./routes/submit');
const editUser = require('./routes/edit-user');
const deleteUser = require('./routes/delete-user');
const post = require('./routes/post'); 
const peditUser = require('./routes/pedit-user');
const pdeleteUser = require('./routes/pdelete-user');
const psubmit = require('./routes/psubmit');
dotenv.config();



var app = express(); 
app.use(fileUpload());
//use css and js and photos
app.use(express.static(__dirname+ '/files'));

//set the view engine to ejs
app.set("views", path.join(__dirname, "view"));
app.set('view engine', 'ejs');

app.use(session({   
	secret: 'secret', 
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/', login);
app.use('/', admin);
app.use('/', register);
app.use('/', blog);
;

//User
app.use('/', submit);
app.use('/', editUser);
app.use('/', deleteUser);
//Post
app.use('/', post)
app.use('/', peditUser);
app.use('/', pdeleteUser);
app.use('/', psubmit);

app.listen(process.env.SERVER_PORT, () => console.log(`server start ${process.env.SERVER_PORT}`));
