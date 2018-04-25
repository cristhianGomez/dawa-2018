var mongoose = require('mongoose'),	
Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var user_schema = new Schema({
	nombre:String,
	contraseña: String,
	correoe: String
});

user_model = mongoose.model('user', user_schema, 'user');

module.exports = {

	log:function(req,res){
		if(req.query._id){
			res.send('/table');
		}
		else{
			res.send('error');
		}
	
	}
};