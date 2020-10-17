//require express
var express = require('express');
//require body-parser
var bodyParser = require("body-parser");
//require node-fetch
var fetch = require('node-fetch');
//requie request
var request = require('request');
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
var call;
app.get('/', function(req, res){
    request('http://xkcd.com/info.0.json', function (error, response, body) {
    call = JSON.parse(body);
    var day = call.day;
    var month = call.month;
    var year = call.year;
    var title = call.title
    var alt = call.alt;
    var image = call.img;
    res.render('index', {day:day, month:month, year:year, title:title, alt:alt, image:image});
});
});

app.get('/comic', function(req, res){
    num = Math.floor(Math.random() * 2372); 
    request('http://xkcd.com/'+num+'/info.0.json', function (error, response, body) {    
    call = JSON.parse(body);
    var day = call.day;
    var month = call.month;
    var year = call.year;
    var title = call.title
    var alt = call.alt;
    var image = call.img;
    res.render('comic', {day:day, month:month, year:year, title:title, alt:alt, image:image});
});
});
//server setup
app.listen(port, function(){
    console.log('Listening on ' + port)
});