import React from "react";
import Banner from "./Banner";
import { NavLink } from "react-router-dom";
import Button from "../Styles/Button";

const HeroSection = () => {
  return (
    <div className="p-5">
      <div className="container grid gap-3 mx-auto my-2 md:grid-cols-2">
        <div className="p-3 md:p-12">
          <div className="md:mt-20">
            <p className="mb-1 text-xl uppercase text-btn">Welcome to</p>
            <h1 className="mb-1 font-sans font-medium uppercase text-2xlo md:text-5xl">
              Bajrang Latkan
            </h1>
            <p className="my-3 text-text">
              Discover a seamless shopping experience at our online store.
              Explore a curated collection of quality products, enjoy exclusive
              deals, and indulge in effortless, secure transactions. Happy
              shopping!
            </p>
            <NavLink to="/shop">
              <Button>Shop Now</Button>
            </NavLink>
          </div>
        </div>

        <Banner />
      </div>
    </div>
  );
};

export default HeroSection;
