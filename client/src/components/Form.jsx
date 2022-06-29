import { useState } from "react";
import axios from "axios";

export const Form = ({ title }) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const toggleUser = (e) => {
    e.preventDefault;
    setUser(e.target.value);
  };

  const togglePassword = (e) => {
    e.preventDefault;
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault;
    axios
      .post("http://localhost:8080/login", {
        username: user,
        password: password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>username: {user}</p>
      <input type="text" placeholder="user" onChange={toggleUser} />
      <p>password: {password}</p>
      <input type="password" placeholder="password" onChange={togglePassword} />
      <button onClick={handleLogin}>send</button>
    </div>
  );
};
