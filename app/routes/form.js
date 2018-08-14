module.exports = function(app){
	app.get('/forms', function(req,res){
		res.render('./form/add_form');
	});
}