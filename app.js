import express from "express";
import "dotenv/config";

let app = express();

app.get("/", (req, res) => {
  res.send("Landing page coming soon");
});

app.listen(process.env.PORT, process.env.IP, () => {
  console.log(`Server is wiredup and running on port ${process.env.PORT}`);
});
