import { Schema, model } from "mongoose";

const user = new Schema({
  username: String,
  email: String,
  password: String,
});

export default model("User", user);
