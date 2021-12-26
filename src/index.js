const path = require("path");
const express = require("express"); // them thu vien express
const morgan = require("morgan"); //  log request
const engine = require("express-handlebars");
// import { engine } from 'express-handlebars';
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
// app.use(morgan('combined'));

// // Template engine
app.engine(
  "hbs",
  engine.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

app.get("/", (req, res) => res.render("home"));

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/news", (req, res) => {
  res.render("search");
});

app.listen(port, () => console.log(`http://localhost:${port}`));
