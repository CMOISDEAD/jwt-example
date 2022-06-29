import jwt from "jsonwebtoken";
import userModel from "../../db/models/User";

// TODO: make a documentation for this functions.
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

  user.save((err) => {
    if (err) return console.log(err);
    console.log("user saved succesfully");
  });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 5,
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

  const token = jwt.sign({ id: userAuth.id }, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 5,
  });

  res.status(200).send({
    auth: true,
    data: { username: userAuth.username, email: userAuth.email },
    msg: "logged",
    token,
  });
};

export const deleteController = async (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Not token provided" });
  }

  const { err, decoded } = jwt.verify(
    token,
    process.env.JWT_SECRET_KEY,
    (err, decoded) => {
      return { err, decoded };
    }
  );

  if (err) {
    return res.status(401).json({ error: err });
  }

  await userModel.findByIdAndDelete(decoded.id);

  return res.status(202).json({ msg: "User removed succesfully" });
};

export const usersController = async (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ error: "Not token provider" });
  }

  const { err, id } = jwt.verify(
    token,
    process.env.JWT_SECRET_KEY,
    (err, decoded) => {
      if (err) return { err, decoded };
      let { id } = decoded;
      return { err: false, id };
    }
  );

  if (err) {
    return res.status(401).json({ error: err });
  }

  const user = await userModel.findById(id);

  if (!user) {
    return res.status(404).json({ error: "user not found." });
  }

  res.status(200).send(user);
};
