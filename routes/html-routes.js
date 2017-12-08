var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.ejs"));
  });

  app.get("/dashboard/:id", function(req, res) {
  	res.sendFile(path.join(__dirname, "..views/dashboard.ejs"));
  })

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/profile.ejs"));
  });  

  app.get("/inventory", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/inventory-view-all.html"));

  });

  app.get("/signup", function (req, res) {
  		res.sendFile(path.join(__dirname, "../public/signup.ejs"));

  });

};