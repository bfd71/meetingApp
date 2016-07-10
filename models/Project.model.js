var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
	projectname: String,
	description: String
});


module.exports = mongoose.model("Project", ProjectSchema);