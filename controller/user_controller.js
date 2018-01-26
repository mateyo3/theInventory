var db = require('../models');

//this is the users_controller.js file
exports.registrationPage = function(req,res) {
  res.render('users/signup', {
    layout: 'main-registration'
  });
};

exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};

// login
exports.loginUser = function(req, res) {
  console.log("user_controller*********")
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
  res.json("/");
};

// register a user
exports.signUpUser = function(req,res) {
  console.log(req.body.user_name)
  db.User.findAll({
    where: {username: req.body.user_name}
  }).then(function(users) {
    console.log("then")
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
    //At some point, make sure that only one user can be associated with an email.
    } else {
      db.User.create({
        user_name: req.body.user_name,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        mob_no: req.body.mob_no,
        position: req.body.position

      }).then(function() {
        res.send({redirect: '/'});
      }).catch(function(err) {
        console.log(err)

        res.json(err);
      });
    }
  })
};