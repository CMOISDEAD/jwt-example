import { useState, useEffect } from "react";
import styled from "styled-components";
import { Form } from "../components/Form";

const Img = styled.div`
  background: url(https://wallpaperaccess.com/full/1276362.jpg) center center
    fixed !important;
  background: cover;
`;

export const Login = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    console.log(response);
  }, [response]);

  return (
    <div className="flex flex-row flex-nowrap m-0">
      <Img className="section-text h-screen w-screen"></Img>
      <div className="section-form h-screen bg-white p-10">
        <Form title="Login" route="login" toggleResponse={setResponse} />
      </div>
    </div>
  );
};
