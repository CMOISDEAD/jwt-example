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
    <div className="text-black">
      <h3 className="text-center text-2xl">{title}</h3>
      <form className="mt-7">
        <h6 className="text-lg">Username</h6>
        <input
          type="text"
          placeholder="username"
          className="border-2 border-black rounded p-1"
          onChange={toggleUser}
        />
        <h6 className="text-lg">Password</h6>
        <input
          type="password"
          placeholder="password"
          className="border-2 border-black rounded p-1"
          onChange={togglePassword}
        />
        <div className="text-center mt-10">
          <button
            className="w-full bg-sky-600 text-white hover:text-orange-400 hover:bg-sky-700 rounded py-2 px-4"
            onClick={handleLogin}
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};
