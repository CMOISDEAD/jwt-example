import express from "express";
import morgan from "morgan";
import connect from "./db/index";
import routes from "./routes/index";
import "dotenv/config";

const app = express();

app.set("PORT", 8080);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);

connect();

app.listen(app.get("PORT"), () => {
  console.log(`Server listen on port: ${app.get("PORT")}`);
});
