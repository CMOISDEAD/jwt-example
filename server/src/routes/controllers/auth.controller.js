import jwt from "jsonwebtoken";
import userModel from "../../db/models/User";

// TODO: make a documentation for this functions.
const secret = "top_secret";

export const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  const userValidate = await userModel.findOne({ username });

  if (userValidate) {
    return res.status(401).json({
      error: "a user with this username exist",
    });
  }

  const user = new userModel({
    username,
    email,
    password,
  });

  user.save((err, doc) => {
    if (err) return console.log(err);
    console.log("user saved succesfully");
  });

  const token = jwt.sign({ id: user.id }, secret, {
    expiresIn: 60 * 60 * 24,
  });

  res.status(200).send({ msg: "saved succesfully", token });
};

export const loginController = async (req, res) => {
  const { username, password } = req.body;

  const userAuth = await userModel.findOne({ username });

  if (!userAuth) {
    return res.status(404).json({
      error: "invalid user or password",
    });
  }

  const passAuth = password == userAuth.password ? true : false;

  if (!passAuth) {
    return res
      .status(401)
      .send({ auth: false, token: null, msg: "wrong user or password" });
  }

  const token = jwt.sign({ id: userAuth.id }, secret, {
    expiresIn: 60 * 60 * 24,
  });

  res.status(200).send({
    auth: true,
    data: { username: userAuth.username, email: userAuth.email },
    msg: "logged",
    token,
  });
};

export const usersController = async (req, res) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json({ error: "Not token provider" });
  }
  // FIX: Manage errors when the token is not valid.
  const { id } = jwt.verify(token, secret);
  const user = await userModel.findById(id);
  if (!user) {
    return res.status(404).json({ error: "user not found." });
  }

  res.status(200).send(user);
};
