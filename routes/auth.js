const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
var passport = require("passport");

//handle sign up logic
router.post("/register2", function (req, res) {

    console.log(req.body)

    var newUser = new User({
        username: req.body.username,
    });
    User.register(newUser, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render('registerUser', { title: "Register", "error": err.message });
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("/");
        });
    });
});


//handling login logic
router.post("/login2", passport.authenticate("local",
    {
        failureRedirect: "/login"
    }), async function (req, res) {
       res.redirect("/");
    });

// logout route
router.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});



module.exports = router;