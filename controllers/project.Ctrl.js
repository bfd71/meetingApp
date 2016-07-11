"use strict";

var Project = require("../models/Project.model");

exports.allProjects = function(req, res) {
	// Find all projects
	Project.find({})
	.sort({
		projectname: 1
	})
	.exec(function(err, projects){
		if(err) {
			console.log("error getting projects");
		} else {
			return res.render("newproject", {
				title: "New Project",
				projects: projects
			});
		}
	});
};



// create register method
exports.createProject = function(req, res) {
	var newProject = new Project();

	newProject.projectname = req.body.projectname;
	newProject.description = req.body.description;

	newProject.save(function(err, project) {
		if (err) {
			console.log(err.message);		

			res.send("error creating project");	
		} else {
			console.log("New Project Created")
			console.log(project);
			res.redirect(301, "/");
			
		}
	});

};
