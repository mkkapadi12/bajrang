import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Facebook, GitHub, Google, Instagram } from "@mui/icons-material";
import { AuthContext } from "../Context/AuthContext";
import welcome from "../assets/Auth/welcome.jpg";
import { toast } from "react-toastify";
import Button from "../Styles/Button";

const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("invalid email and password !", {
          position: "top-left",
        });
        // setErrorMsg("Please provide valid Email and Password");
      });
  };

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg("Please provide valid Email ans Password");
      });
  };

  return (
    <>
      <div className="w-full lg:w-9/12">
        <div className="flex items-center justify-center">
          <img src={welcome} alt="welcome" className="w-[300px]" />
        </div>
        <div className="p-6 pt-1">
          <form className="flex flex-col" onSubmit={handleLogin}>
            <label htmlFor="email" className="py-2 text-text">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="user@xyz.com"
              className="w-full rounded border-none p-2 text-black ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
            />
            <label htmlFor="password" className="py-2 text-text">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="●●●●●●●●●●"
              required
              className="w-full rounded border-none p-2 text-black ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
            />
            {errorMsg && (
              <div className="mt-2 text-center">
                <p className="text-red-500">{errorMsg}</p>
              </div>
            )}
            <div className="mt-3 text-end">
              <Link to="/resetpassword" className="hover:text-btn">
                Forget Password?
              </Link>
            </div>
            <Button className="w-full">
              <input type="submit" value="Login" />
            </Button>
            <p className="mt-3 text-center text-text">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="cursor-pointer text-btn hover:underline"
              >
                Register
              </Link>
            </p>
            <div className="flex items-center justify-center">
              <span className="rounded-full p-1 text-sm font-bold text-text">
                OR
              </span>
            </div>
            <div className="text-center">
              <h2>Login with Social Media</h2>
              <div className="flex items-center justify-center p-2">
                <Link
                  className="mx-1 rounded-full bg-btn p-2 text-white duration-100 hover:scale-75 hover:bg-blue-gray-400"
                  onClick={handleRegister}
                >
                  <Google />
                </Link>
                <Link
                  className="mx-1 rounded-full bg-btn p-2 text-white duration-100 hover:scale-75 hover:bg-blue-gray-400"
                  onClick={handleRegister}
                >
                  <Facebook />
                </Link>
                <Link
                  className="mx-1 rounded-full bg-btn p-2 text-white duration-100 hover:scale-75 hover:bg-blue-gray-400"
                  onClick={handleRegister}
                >
                  <GitHub />
                </Link>
                <Link
                  className="mx-1 rounded-full bg-btn p-2 text-white duration-100 hover:scale-75 hover:bg-blue-gray-400"
                  onClick={handleRegister}
                >
                  <Instagram />
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
