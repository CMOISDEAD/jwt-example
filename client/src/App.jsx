import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [auth, setAuth] = useState(false);

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
    <div className="App">
      <header className="App-header">
        <div className="card">
          <h1>Login </h1>
          <p>username: {user}</p>
          <input type="text" placeholder="user" onChange={toggleUser} />
          <p>password: {password}</p>
          <input
            type="password"
            placeholder="password"
            onChange={togglePassword}
          />
          <button onClick={handleLogin}>send</button>
        </div>
      </header>
      <hr />
      {auth ? `${user} is auth` : ""}
    </div>
  );
}

export default App;
