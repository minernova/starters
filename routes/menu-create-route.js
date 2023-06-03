const router = require("express").Router();
const User = require("../models/user-model");
const fs = require("fs");
const path = require("path");
var multer = require('multer');
var upload = multer({dest:'./static/uploads'});
const parentDir=path.normalize(__dirname+"/..");

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './static/uploads');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});
var upload = multer({ storage: storage })

const authCheck = (req, res, next) => {
  console.log("menu-route");
  console.log(req.session);
  if (req.user) {
    next();
  } else res.redirect("/authorize");
};

router.get("/",  function (req, res) {
  res.render("new-menu");
});

router.post("/", upload.single("image"), function (req, res) {
  if(!req.user) res.redirect('/authorize')
  const menu = getMenu(req);
  const updatedMenus = [menu];
  
  User.findById(req.session.passport.user).then((user) => {
    updatedMenus.push(...user.menus);
    User.findByIdAndUpdate(
      req.session.passport.user,
      { menus: updatedMenus },
      { new: false }
      ).then((user) => {
        console.log(user);
      });
    });
    fs.unlink(parentDir + "/static/uploads/" + req.file.filename,(err)=>console.log(err));
    res.redirect('/menus');
});

function getData(data) {
  let n = data.length;
  let categoryData = [];

  for (let i = 1; i < n; i++) {
    let categoryName = "";
    if (data[i].title.substring(0, 8) === "category") {
      categoryName = data[i].value;
      i++;
      let items = [];
      while (i < n && data[i].title.substring(0, 8) !== "category") {
        items.push({
          itemName: data[i].value,
          itemPrice: parseInt(data[i + 1].value),
        });
        i += 2;
      }
      categoryData.push({
        categoryName: categoryName,
        items: items,
      });
      i--;
    }
  }
  return categoryData;
}

function getMenu(req) {
  let data = [];
  console.log(req.file);
  for (let title in req.body) {
    data.push({ title: title, value: req.body[title] });
  }

  const categoryData = getData(data);
  
  const newMenu = {
    menuTitle: data[0].value,
    image: {
      data: fs.readFileSync(
        path.join(parentDir + "/static/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
    foodCategories: categoryData,
  };
  return newMenu;
}

module.exports = router;
