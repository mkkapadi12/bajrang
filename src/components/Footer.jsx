import React from "react";
import Button from "../Styles/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="bg-bg p-7 md:p-10">
      <div className="container mx-auto my-0">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-2">
          <div className="my-2">
            <h2 className="mb-3 font-bold text-text">NEED HELP</h2>
            <div className="flex flex-col">
              <div>
                <Link to="/contact">Contact us</Link>
              </div>
              <div>
                <Link>Return Policy</Link>
              </div>
              <div>
                <Link>FAQs</Link>
              </div>
              <div>
                <Link>Account</Link>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h2 className="mb-3 font-bold text-text">COMPANY</h2>
            <div className="flex flex-col">
              <Link>About us</Link>
              <Link>Our Team</Link>
              <Link>Our Location</Link>
            </div>
          </div>
          <div className="my-2">
            <h2 className="mb-3 font-bold text-text">MORE INFO</h2>
            <div className="flex flex-col">
              <Link>Terms and Condition</Link>
              <Link>Privacy Policy</Link>
            </div>
          </div>
          <div className="my-2">
            <h2 className="mb-3 font-bold text-text">SUBSCRIBE</h2>
            <form className="flex flex-col">
              <input
                type="email"
                className="rounded border-none p-2 text-black ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring"
                placeholder="user@xyz.com"
                required
              />
              <div>
                <Button>
                  <input type="submit" value="SUBSCRIBE" />
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="container flex flex-col justify-between p-4 sm:flex-row md:items-center">
          <div className="my-3 flex flex-col items-center sm:flex-row md:m-0">
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className="w-[150px]" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-1 text-text md:ml-4">
              <span className="text-xl font-bold text-text">&copy;</span>{" "}
              {new Date().getFullYear()} All right reserved.
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="mx-2 cursor-pointer text-text">
              <Twitter />
            </div>
            <div className="mx-2 cursor-pointer text-text">
              <Facebook />
            </div>
            <div className="mx-2 cursor-pointer text-text">
              <Instagram />
            </div>
            <div className="mx-2 cursor-pointer text-text">
              <LinkedIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
