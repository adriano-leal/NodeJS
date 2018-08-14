/*
var express = require('express')(); 
//var app = express();

express.set('view engine', 'ejs');  
		All moved to Server.js file
*/ 

var app = require('./config/server');

/*var routeHome = require('./app/routes/home');
routeHome(app);

var routeArea = require('./app/routes/area');
routeArea(app); */


/*
app.get('/', function(req, res){
	res.render('./home/index');
});

app.get('/healthcare', function(req, res){
	res.render('./area/healthcare');
});
		-> All moved to their own route file
*/


app.listen(3000, function(req, res){
	console.log('Server Online ..');
});