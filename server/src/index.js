const express = require("express");
const bodyParser = require("body-parser");

// initialize express
const app = express();

// config
app.set("PORT", 8080);

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use(require("./routes/index"));

// server start
app.listen(app.get("PORT"), () => {
  console.log(`Server listen on port: ${app.get("PORT")}`);
});
