import { Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { Login } from "./containers/Login";
import { Register } from "./containers/Register";
import "./index.css";

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
