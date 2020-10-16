//require express
var express = require('express');
//require body-parser
var bodyParser = require("body-parser");
//require node-fetch
var fetch = require('node-fetch');
//create express object, call express
var app = express();
//get port information
const port = process.env.PORT || 3000;

//tell application to use EJS for templates
app.set('view engine', 'ejs');
//make styles public
app.use(express.static("public"));
//tell app to use Body parser
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    //res.send('Hello World');
    tasks = ['hielo'];
    completed = ['test'];
    res.render('index'); //add completed variable to ejs ex {a:a, b:b}
    //return something to home page
    //res.render('index', {tasks: tasks, completed: completed}); //add completed variable to ejs ex {a:a, b:b}
});

//server setup
app.listen(port, function(){
    console.log('Listening on ' + port)
});