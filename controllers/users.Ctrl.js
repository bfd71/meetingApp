"use strict";

var User = require("../models/User.model");

exports.allUsers = function(req, res) {
	// Find all users
	User.find({})
	.sort({
		username: 1
	})

	.exec(function(err, users){
		if(err) {
			console.log("error getting users");
		} else {
			return res.render("newuser", {
				title: "New User",
				users: users
			});
		}
	});
}


// create register method
exports.createUser = function(req, res) {
	var newUser = new User();

	newUser.username = req.body.username;
	newUser.email = req.body.email;
	newUser.password = req.body.password;

	newUser.save(function(err, user) {
		if (err) {
			console.log(err.message);
			//console.log(err.errors.username.message);		

			res.send("error registering user");	
		} else {
			console.log("New User Created")
			console.log(user);
			res.redirect(301, "/");
			
		}
	});

};
