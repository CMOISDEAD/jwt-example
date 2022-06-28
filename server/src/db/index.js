import mongoose from "mongoose";

const connect = () => {
  mongoose.connect("mongodb://localhost/mern-database");
  console.log("Database connected.");
};

export default connect;
