import express from "express";
import "dotenv/config";

let app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campground", (req, res) => {
  res.render("campground");
});

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Server is wiredup and running on port ${process.env.PORT}`);
});
