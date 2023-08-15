port=process.env.PORT || 3000 ;

const express = require("express");

//----------------------------------------------- Routes ---------------------------------------------------------//
const authRoutes=require("./routes/auth-routes");
const menuCreateRoute=require("./routes/menu-create-route")
const menusRoute=require("./routes/menus-route")
const removeRoute=require("./routes/remove-route")
const updateRoute=require("./routes/update-menu-route")
const menuRoute=require("./routes/menu-route")
const shareRoute=require("./routes/share-menu-route")   


const path=require("path")
const mongoose=require("mongoose");
const keys=require("./config/keys");
const session=require("express-session");
const passport=require("passport");

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname+"/static"));
app.set('view engine', 'ejs');

app.use(session({
    secret:"12345",
    resave:false, 
    saveUninitialized:false,
    
}));
app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(keys.mongoose.dbURL);
app.use('/',authRoutes);
app.use('/menus/create',menuCreateRoute);
app.use('/menus',menusRoute);
app.use('/menus/edit',updateRoute);
app.use('/menus/menu',menuRoute);
app.use('/remove',removeRoute);
app.use('/share',shareRoute);

///----------------------------------------------- home ---------------------------------------------------------//
app.get('/', function(req, res) {
    res.render('home');
})



app.listen(port, () =>{console.log("server started");})
