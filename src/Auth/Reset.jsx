import React from "react";
import login from "../assets/Auth/login.gif";
import ResetPassword from "../SemiComponents/ResetPassword";

const Reset = () => {
  return (
    <div className="w-full p-3 sm:p-7">
      <div className="container mx-auto grid w-full sm:w-4/5 sm:grid-cols-2">
        <div className="flex items-center justify-center ">
          <ResetPassword />
        </div>
        <div className="flex items-center justify-center ">
          <img src={login} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Reset;
