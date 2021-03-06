var mong = require('mongoose');
var db = require('./DBConfig');

//User DB Schema

var UserSchema = mong.Schema({
    id: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    },
    username: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String
    },
    propic: {
        type: String
    },
    email: {
        type: String
    },
    posts: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
    }
});

var User = module.exports = mong.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findOne({ id: id }, callback);
}

module.exports.getUserByObjectId = function(id, callback) {
    User.findById({ _id: id }, callback);
}

module.exports.getUserByUname = function(Uname, callback) {
    User.findOne({ username: Uname }, callback);
}

module.exports.addUser = function(user, callback) {
    user.save(callback);
}