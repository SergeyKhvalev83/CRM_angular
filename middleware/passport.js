const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // to extract token from request header
  secretOrKey: keys.jwt,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload.userId).select("email id"); // userId come from generated during login token
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      } catch (err) {
        console.log("Error during token evaluation: ", err)
      }
    })
  );
};
