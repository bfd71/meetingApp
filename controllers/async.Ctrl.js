"use strict";

var Note = require("../models/Note.model");
var User = require("../models/User.model");
var Project = require("../models/Project.model");
var async = require('async');

exports.homePage = function(req, res) {
	// Gather all Notes and all Users
	async.parallel([
		function(cb){
			var query = Note.find({});
			query.sort({
				createdOn:"desc"
			})
			.limit(12)
			.exec(function(err, notes) {
				cb(err, notes);
			})
		},

		function(cb){
			var query = User.find({});
			query.sort({
				username: 1
			})
			.exec(function(err, users) {
				cb(err, users);
			})
		}
		],
		function(err, results) {
			if(err) {
				console.log(err);
			} else {
				res.render('index', {
					notes: results[0],
					users: results[1]
				});
			}
		});
};

exports.newNote = function (req, res) {
	// Gather all Users and all Projects
	async.parallel([
		function(cb){
			var query = User.find({});
			query.sort({
				username: 1
			})
			.exec(function(err, users) {
				cb(err, users);
			})
		},

		function(cb){
			var query = Project.find({});
			query.sort({
				projectname: 1
			})
			.exec(function(err, projects) {
				cb(err, projects);
			})
		},
		],
		function(err, results) {
			if(err) {
				console.log(err);
			} else {
				res.render("newnote", {
					users: results[0],
					projects: results[1]
				});
			}
		});
};
