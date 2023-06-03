const router = require("express").Router();
const User = require("../models/user-model");

router.get("/", (req, res) => {
  if(!req.user) res.redirect('/authorize')
  deleteMenu(  req.session.passport.user, req.query.menuId, res);
});

async function deleteMenu(userId,menuId, res) {
  const user = await User.findById(userId);
  
  
  let updatedMenus 
    = user.menus
      .filter((menu) =>
       menu.id === menuId ? false : true);

  await User.findByIdAndUpdate(userId,{menus:updatedMenus});
  res.redirect('/menus')
  

}
module.exports = router;
