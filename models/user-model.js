const mongoose = require("mongoose");


const foodCategorySchema=mongoose.Schema({
    categoryName:String,
    items:[{
        itemName:String,
        itemPrice:Number,
    }]
})



const menuSchema = new mongoose.Schema({
  foodCategories: [foodCategorySchema],
});




const userSchema = new mongoose.Schema({
  userName: String,
  googleId: String,
  menus: [menuSchema],
});

const User=mongoose.model('User', userSchema);

module.exports = User;