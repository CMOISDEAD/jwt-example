import { useState } from "react";
import axios from "axios";

export const Form = ({ title, route, toggleResponse }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault;
    axios
      .post(`http://localhost:8080/${route}`, {
        username: user,
        password: password,
      })
      .then((res) => {
        toggleResponse(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-black">
      <h3 className="text-center text-2xl">{title}</h3>
      <div className="mt-7">
        <h6 className="text-lg">Username</h6>
        <input
          type="text"
          placeholder="Username"
          className="border-2 border-black rounded p-1"
          onChange={toggleUser}
        />
        <h6 className="text-lg">Password</h6>
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-black rounded p-1"
          onChange={togglePassword}
        />
        <br />
        <input id="save" type="checkbox" name="save" />
        <span> Save password?</span>
        <div className="text-center mt-10">
          <button
            className="w-full bg-sky-600 text-white hover:text-orange-400 hover:bg-sky-700 rounded py-2 px-4"
            onClick={handleSubmit}
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};
