const router=require('express').Router();

const authCheck = (req, res, next) => {
    console.log("menu-route");
    console.log(req.session);
  if (req.user) next();
  else res.redirect("/authorize");
};

router.get('/',authCheck, function(req, res) {
    res.render('my-menus');
})
router.get('/create', function(req, res) {
    res.render('new-menu');
})
router.post('/create', function(req, res) {
    res.send(req.body);
})

module.exports =router;