var cors = require('cors');
var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var app = express();

//Set up CORS & Static Dir
app.use(cors());
app.use(bodyParser());
app.use('/static', express.static(__dirname + '/static'));




// ======================= API Proxy =====================
app.post('/api/login',function(req,res){
	console.log("Login");
	req.pipe(request.post('http://109.74.206.207:8080/v1/login',{form:req.body})).pipe(res);
});

app.get('/api/filters',function(req,res){
	console.log("GET - Filters");
	req.pipe(request.get('http://109.74.206.207:8080/v1/filters'),{form:req.body}).pipe(res);
});

app.get('/api/mentions',function(req,res){
	console.log("GET - Mentions");
	req.pipe(request.get('http://109.74.206.207:8080/v1/mentions'),{form:req.body}).pipe(res);
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on port '+port);