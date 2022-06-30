import { Link } from "react-router-dom";

const Button = ({ body }) => {
  return (
    <button className="bg-sky-600 hover:bg-sky-700 rounded p-4 mx-2">
      {body}
    </button>
  );
};

export const Home = () => {
  return (
    <div className="py-10">
      <h1 className="text-2xl text-center uppercase font-bold">Links</h1>
      <div className="text-center">
        Consectetur alias ducimus ea ipsum qui. Excepturi repellendus ab maxime
        sequi ea Aliquam corporis velit totam eius libero inventore? Accusantium
        officia quas iusto ipsam nisi eveniet tempore Impedit perspiciatis
        incidunt!
        <div className="buttons">
          <Link to="login">
            <Button body="Click here to Login" />
          </Link>
          <Link to="register">
            <Button body="Click here to register" />
          </Link>
        </div>
      </div>
    </div>
  );
};
