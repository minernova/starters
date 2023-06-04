const passport = require("passport");
const passportSetup = require("../config/passport-setup");
const router = require("express").Router();

const authCheck = (req, res, next) => {
  // console.log("auth-route");
  // console.log(req.session);
  if (!req.user) next();
  else res.redirect("/menus");
};
router.get("/authorize", authCheck, function (req, res) {
  res.render("authorize");
});

router.get("/facebook", authCheck, passport.authenticate("facebook"));

router.get('/facebook/callback/',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/menus');
  });


router.get(
  "/google",
  authCheck,
  passport.authenticate("google", {
    scope: ["profile"],
  })
);
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/menus/");
});
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
