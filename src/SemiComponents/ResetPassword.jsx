import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Styles/Button";
import welcome from "../assets/Auth/welcome.jpg";
import { toast } from "react-toastify";
import MailIcon from "@mui/icons-material/Mail";
import { AuthContext } from "../Context/AuthContext";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const ResetPassword = () => {
  const { reset } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const HandleReset = (e) => {
    e.preventDefault();
    reset(email)
      .then(() => {
        toast.info("check your email for reset link", {
          position: "top-center",
          icon: <MailIcon />,
        });
      })
      .catch((error) => {
        toast.error("Something went wrong !" + error);
      });
  };
  return (
    <div className="w-full lg:w-9/12">
      <div className="flex items-center justify-center">
        <img src={welcome} alt="welcome" className="w-[300px]" />
      </div>
      <div className="p-6 pt-1">
        <form className="flex flex-col" onSubmit={HandleReset}>
          <label htmlFor="email" className="py-2 text-text">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="user@xyz.com"
            className="w-full p-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
          />

          {/* {errorMsg && (
              <div className="mt-2 text-center">
                <p className="text-red-500">{errorMsg}</p>
              </div>
            )} */}

          <Button className="w-full">
            <input type="submit" value="RESET" />
          </Button>
          <div className="flex items-center justify-between mt-3 text-center">
            <Link
              to="/login"
              className="cursor-pointer text-btn hover:underline"
            >
              Login{" "}
              <span>
                <ArrowBack />
              </span>
            </Link>
            <Link
              to="/register"
              className="cursor-pointer text-btn hover:underline"
            >
              <span>
                <ArrowForward />
              </span>{" "}
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
