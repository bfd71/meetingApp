var express = require("express");
var router = express.Router();
var notesCtrl = require("../controllers/notes.Ctrl");
var asyncCtrl = require("../controllers/async.Ctrl");
var usersCtrl = require("../controllers/users.Ctrl");
var projectCtrl = require("../controllers/project.Ctrl");

router.get("/", asyncCtrl.homePage);
router.post("/", notesCtrl.noteByMember);

router.get("/newnote", asyncCtrl.newNote);
router.post("/newnote", notesCtrl.createNote);

router.get("/newuser", usersCtrl.allUsers);
router.post("/newuser", usersCtrl.createUser);

router.get("/newproject", projectCtrl.allProjects);
router.post("/newproject", projectCtrl.createProject);

module.exports = router;