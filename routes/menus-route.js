const router = require("express").Router();
const User = require("../models/user-model");



const authCheck = (req, res, next) => {
  console.log("menu-route");
  console.log(req.session);
  if (req.user) next();
  else res.redirect("/authorize");
};

router.get("/", authCheck, function (req, res) {
  
    generateUserData(req,res);
});

async function generateUserData(req,res) {
    const user=await User.findById(req.session.passport.user);
    const menus= typeof req.query.search==='undefined'? user.menus:user.menus.filter((menu)=>{
      return menu.menuTitle.toLowerCase().includes(req.query.search.toLowerCase());
    });
    res.render('my-menus',{menus:menus});
}
module.exports = router;