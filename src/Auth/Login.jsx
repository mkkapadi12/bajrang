import React from "react";
import login from "../assets/Auth/login.gif";
import LoginForm from "../SemiComponents/LoginForm";

const Login = () => {
  return (
    <div className="w-full p-3 sm:p-7">
      <div className="container mx-auto grid w-full sm:w-4/5 sm:grid-cols-2">
        <div className="flex items-center justify-center ">
          <LoginForm />
        </div>
        <div className="flex items-center justify-center ">
          <img src={login} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
