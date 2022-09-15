const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //to import locally made modules

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public")); //to access the static files and apply to to our server

let items = [];
let workItems = [];

app.get("/", (req, res) => {
  let day = date.getDay();
  res.render("list", { ListTitle: day, newLists: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", (req, res) => {
  res.render("list", { ListTitle: "work list", newLists: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
