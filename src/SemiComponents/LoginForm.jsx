import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Styles/Button";
import welcome from "../assets/Auth/welcome.jpg";
import { toast } from "react-toastify";

const Form = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    try {
      if (
        loggeduser.email.toString() === input.email.toString() &&
        input.password.toString() === loggeduser.password.toString()
      ) {
        localStorage.setItem("logged", true);
        toast.success("Login Successfully !");
        navigate("/");
      } else {
        toast.error("Wrong email and password");
        setInput({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      alert("Pleses Create your Account !!");
      navigate("/register");
    }
  };

  return (
    <>
      <div className="w-full lg:w-9/12">
        <div className="flex items-center justify-center">
          <img src={welcome} alt="welcome" className="w-[300px]" />
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email" className="py-2 text-text">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) => handleChange(e)}
              id="email"
              required
              placeholder="user@xyz.com"
              className="w-full p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
            />
            <label htmlFor="password" className="py-2 text-text">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) => handleChange(e)}
              id="password"
              placeholder="●●●●●●●●●●"
              required
              className="w-full p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
            />
            <div className="mt-3 text-end">
              <Link to="/" className="hover:text-btn">
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
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
