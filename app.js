import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campground", (req, res) => {
  res.render("campground");
});

app.get("/campground/new", (req, res) => {
  res.render("new");
});

app.post("/campground", (req, res) => {
  res.send("process input from form");
});

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Server is wiredup and running on port ${process.env.PORT}`);
});
