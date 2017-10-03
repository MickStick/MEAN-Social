var express = require('express');
var router = express.Router();
var pp = require('passport');
var jwt = require('jsonwebtoken');
var hex = require('sha256');

var User = require('../model/Users');
var UserPwd = require('../model/UserPwd');



router.get('/', function(req, res, next) {
    User.count({}, function(err, result) {
        if (err) {
            res.send("Count Error: " + err);
        } else {

        }
        res.send("User Count: " + result);
    });

});

//Registration
router.post('/register', function(req, res, next) {
    var count;
    User.count({}, function(err, result) {
        if (err) {
            console.log(err);
        }
        count = result;
        let newUser = new User({
            id: 100000 + count,
            username: req.body.uname,
            fname: req.body.fname,
            lname: req.body.lname,
            propic: null,
            email: req.body.email,
            posts: 0

        });

        let newPwd = new UserPwd({
            id: newUser.id,
            password: hex(req.body.pword)
        });

        User.addUser(newUser, function(err, user) {
            if (err) {
                res.json({ success: false, msg: "User Failed To Register", id: newUser.id });
                console.log(err);
                console.log("ID: " + newUser.id + "\nFisrt Name: " + newUser.fname + "\n User Count: " + count);
            } else {
                UserPwd.addPwd(newPwd, function(err, pwd) {
                    if (err) {
                        res.json({ success: false, msg: "Password Failed To Save" });
                        console.log(err);
                    } else {
                        res.json({ success: true, msg: "User Registered and Password Saved" });
                    }
                });
            }
        });
    });


});

//Login
router.post('/login', function(req, res, next) {
    res.send("User Login");
});

//Authentication
router.post('/auth', function(req, res, next) {
    var uname = req.body.uname;
    var pword = req.body.pword;

    User.getUserByUname(uname, function(err, user) {
        if (err) {
            return res.json({
                success: false,
                msg: "Authentication Error"
            });
            console.log(err);
        } else {
            if (!user) {
                return res.json({
                    success: false,
                    msg: "User Not Found"
                });
            } else {
                console.log("User ID: " + user.id);
                UserPwd.getPwdById(user.id, function(err, pwd) {
                    if (err) {
                        return res.json({
                            success: false,
                            msg: "Authentication Error"
                        });
                        console.log(err);
                    } else {
                        if (!pwd) {
                            return res.json({
                                success: false,
                                msg: "Username or Password Incorrect"
                            });
                        } else {
                            console.log("Password typed: " + pword);
                            UserPwd.compPwd(pword, pwd.password, function(err, isMatch) {
                                if (err) {
                                    return res.json({
                                        success: false,
                                        msg: "Authentication Error"
                                    });
                                    console.log(err);
                                } else {
                                    if (isMatch) {
                                        console.log("User Object: " + user);
                                        const token = jwt.sign({ data: user }, require('../model/DBConfig').secret, {
                                            expiresIn: 604800 //expires in a week
                                        });

                                        res.json({
                                            success: true,
                                            token: 'Bearer ' + token,
                                            user: user
                                        });
                                    } else {
                                        res.json({
                                            success: false,
                                            msg: "Username or Password Incorrect"
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
    //res.send("User Authentication");
});

//Profile
router.get('/profile', pp.authenticate('jwt-bearer', { session: false }), function(req, res, next) {
    res.json({ user: req.user });
    //res.send("User Profile");
});

//Validate
// router.get('/validate', function(req, res, next) {

// });



module.exports = router;