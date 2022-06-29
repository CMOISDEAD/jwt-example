import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1 className="text-center">Links</h1>
      <Link to="login">Click here to login</Link>
      <Link to="register">Click here to register</Link>
    </>
  );
};
