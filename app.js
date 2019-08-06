import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import flash from "connect-flash";
import LocalStrategy from "passport-local";
import User from "./models/user";
import indexRoutes from "./routes/index";
import methodOverride from "method-override";
import campgroundRoutes from "./routes/campgrounds";
import commentRoutes from "./routes/comments";

let app = express();
mongoose.connect("mongodb://localhost/yelp_app");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(flash());

app.use(
  require("express-session")({
    secret: "its a secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Server is wiredup and running on port ${process.env.PORT}`);
});
