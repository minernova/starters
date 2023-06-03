const router = require('express').Router();
const User = require('../models/user-model')
router.get('/',(req, res) =>{
    if(!req.query.uId && !req.user  ) res.redirect('/authorize')
    const menuId=req.query.menuId;
    const userId=req.query.uId || req.session.passport.user;

    User.findById(userId).then((user) =>{
        const menu=user.menus.find((menu)=>menu.id===menuId);
        res.render('menu',{menu:menu});
    })


})

module.exports=router;