const router = require("express").Router();
const User = require("../../models/user-model");



const authCheck = (req, res, next) => {
  console.log("menu-route");
  console.log(req.session);
  if (req.user) next();
  else res.redirect("/authorize");
};


router.get("/create",authCheck, function (req, res) {
  res.render("new-menu");
});
router.post("/create",authCheck, function (req, res) {
  res.send(req.body);
  const menu = getMenu(req);
  const updatedMenus = [menu];

  User.findById(req.session.passport.user).then((user) => {
    updatedMenus.push(...user.menus);
    User.findByIdAndUpdate(
      req.session.passport.user,
      { menus: updatedMenus },
      { new: false 
    }
    ).then((user) => {
      console.log(user);
    });
  });
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
  for (let title in req.body) {
    data.push({ title: title, value: req.body[title] });
  }

  const categoryData = getData(data);

  const newMenu = {
    menuTitle: data[0].value,
    foodCategories: categoryData,
  };
  return newMenu;
}


module.exports = router;
