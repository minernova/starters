const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
const User = require("../models/user-model");
const expressSession=require("express-session");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.find({ googleId: id }).then((user) => {
    done(null,user)
  })
});


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/google/redirect",
    },
    (accessTokes, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((user) => {
        if (user) {
          return done(null,user);
        } else {
          new User({
            userName: profile.displayName,
            googleId: profile.id,
          })
          .save()
          .then((newUser) => {
            return done(null,newUser);
            });
        }
      });
      
    }
  )
);
