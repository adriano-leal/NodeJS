
module.exports = function(app){
	app.get('/healthcare', function(req, res){
		res.render('./area/healthcare');
	});
}