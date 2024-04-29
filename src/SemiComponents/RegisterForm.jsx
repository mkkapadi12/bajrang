import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Styles/Button";
import welcome from "../assets/Auth/welcome.jpg";
import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
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
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <>
      <div className="w-full lg:w-9/12">
        <div className="flex items-center justify-center">
          <img src={welcome} alt="welcome" className="w-[300px]" />
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="name" className="py-2 text-text">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
              id="name"
              required
              placeholder="John Doe"
              className="w-full p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
            />
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
            <label htmlFor="password" className="py-2 text-text">
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
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

export default Form;
