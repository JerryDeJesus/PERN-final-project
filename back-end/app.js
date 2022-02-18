const cors = require("cors");
const express = require("express");
const shoeController = require("./controllers/shoeController");
const app = express();

app.use(cors());
app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("Welcome to ShoeWorld");
})

app.use("/shoes", shoeController);

app.get("*", (req, res) => {
res.status(404).send("Page not found");
});

module.exports = app;