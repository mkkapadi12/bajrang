import React from "react";
import login from "../assets/Auth/login.gif";
import Form from "../SemiComponents/LoginForm";

const Login = () => {
  return (
    <div className="w-full p-3 sm:p-7">
      <div className="container grid w-full mx-auto sm:w-4/5 sm:grid-cols-2">
        <div className="flex items-center justify-center ">
          <Form />
        </div>
        <div className="flex items-center justify-center ">
          <img src={login} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
