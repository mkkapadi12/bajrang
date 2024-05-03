import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Styles/Button";
import welcome from "../assets/Auth/welcome.jpg";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/login";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;

    if (password !== confirmPassword) {
      setErrorMsg("Password doesn't match");
    } else {
      setErrorMsg("");
      // Signed up
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          toast.success("Register Successfully");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  };
  return (
    <>
      <div className="w-full lg:w-9/12">
        <div className="flex items-center justify-center">
          <img src={welcome} alt="welcome" className="w-[300px]" />
        </div>
        <div className="p-6">
          <form onSubmit={handleSignUp} className="flex flex-col">
            <label htmlFor="name" className="py-2 text-text">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="John Doe"
              className="w-full rounded border-none p-2 text-black ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
            />
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
            <label htmlFor="password" className="py-2 text-text">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="●●●●●●●●●●"
              required
              className="w-full rounded border-none p-2 text-black ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
            />
            {errorMsg && (
              <div className="mt-2 text-center">
                <p className="text-red-500">{errorMsg}</p>
              </div>
            )}
            {/* <div className="mt-3 text-end">
              <Link to="/" className="hover:text-btn">
                Forget Password?
              </Link>
            </div> */}
            <Button className="w-full">
              <input type="submit" value="Sign Up" />
            </Button>
            <p className="mt-3 text-center text-text">
              Already have an account?{" "}
              <Link
                to="/login"
                className="cursor-pointer text-btn hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
