const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
var FacebookStrategy = require('passport-facebook');
const keys = require("./keys");
const User = require("../models/user-model");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.find({ googleId: id }).then((user) => {
    done(null,user);
  });
});

passport.use(new FacebookStrategy({
  clientID: keys.facebook.appId,
  clientSecret: keys.facebook.appSecret,
  callbackURL: "https://starters-jowo.onrender.com/facebook/callback/"
},
function(accessToken, refreshToken, profile, done) {
  User.findOne({ googleId: profile.id }).then((user) => {
    if (user) {
      console.log(user);
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
));
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
          console.log(user);
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
