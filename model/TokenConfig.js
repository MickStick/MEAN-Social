const strat = require('passport-jwt').Strategy;
const extract = require('passport-jwt').ExtractJwt;
const User = require('./Users');
const db = require('./DBConfig');

module.exports = function(pp) {
    let opts = {
        jwtFromRequest: extract.fromAuthHeaderAsBearerToken(),
        secretOrKey: db.secret
    };
    pp.use(new strat(opts, function(jwt_payload, done) {
        console.log(jwt_payload);
        User.getUserByObjectId(jwt_payload._doc._id, function(err, user) {
            if (err) {
                return done(err, false)
            } else {
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            }
        });
    }));
}