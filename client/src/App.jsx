import { Routes, Route } from "react-router-dom";
import { Home } from "./containers/Home";
import { Login } from "./containers/Login";
import { Register } from "./containers/Register";
import "./styles/App.css";

function App() {
  return (
    <div className="bg-stone-900 text-white h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
