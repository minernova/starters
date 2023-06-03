const router=require('express').Router();
const fs=require('fs');
const qr = require('qrcode');

router.get('/', (req, res)=>{
    if(!req.user) res.redirect('/authorize')
    const url=getUrl(req);
    qr.toDataURL(url, (err, src) => {
        if (err) res.send("Error occured");
      
        // Let us return the QR code image as our response and set it to be the source used in the webpage
        res.render("share", { src:src,menuName:req.query.menuName });
    });
    console.log(url);
})


function getUrl(req) {
    console.log(req.originalUrl);
    return req.protocol+"://"+req.hostname+"/menus/menu?menuId="+req.query.menuId+"&uId="+req.session.passport.user;
}
module.exports = router;