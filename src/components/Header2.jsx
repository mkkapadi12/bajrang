import React, { useState } from "react";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
// import SearchIcon from "@mui/icons-material/Search";
import { Link, NavLink } from "react-router-dom";
// import Button from "../Styles/Button";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "SHOP", path: "/shop" },
    { title: "CONTACT", path: "/contact" },
  ];

  return (
    <header className="px-4 bg-bg xl:px-28">
      <nav className="container flex items-center justify-between pt-4 pb-3 md:py-2">
        {/* Logo */}
        <div className="w-2/6 h-12 md:h-16 md:w-44">
          <Link to="/">
            <img src={logo} alt="logo" className="w-full h-full" />
          </Link>
        </div>

        {/* Navbar */}
        <div className="w-1/2">
          <ul className="items-center justify-around hidden text-black lg:flex">
            {navItems.map(({ title, path }) => (
              <li key={title} className="hover:text-purple-700">
                <NavLink to={path} className="text-base">
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* account and shopping btn */}
        <div className="items-center hidden gap-4 text-lg text-Black sm:flex">
          <Link
            to="/cart"
            className="container flex items-center gap-2 p-1 text-white rounded bg-btn"
          >
            <ShoppingCartIcon />
            Cart
          </Link>
          <Link
            href="/profile"
            className="flex items-center gap-2 p-1 text-white rounded bg-btn"
          >
            <AccountCircleIcon />
            {isAuthenticated ? "Mayur" : "Account"}
          </Link>
          {isAuthenticated ? (
            <Link className="rounded bg-btn">
              <button
                className="w-[80px] p-[3.4px] text-white"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </Link>
          ) : (
            <Link className="rounded bg-btn">
              <button
                className="w-[80px] p-[3.4px] text-white"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </Link>
          )}
        </div>

        {/* toggle Menu */}
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6 text-black" />
            ) : (
              <MenuIcon className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </nav>
      <hr />

      {/* mobile menu items */}
      <div className="w-full z-99">
        <ul
          className={`absolute z-99 flex h-4/5 w-11/12 flex-col items-center justify-center rounded bg-black px-4 py-2 text-center  text-white ${isMenuOpen ? "" : "hidden"}`}
        >
          {/* {isAuthenticated && user.name} */}
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="my-3 cursor-pointer hover:text-orange-500"
            >
              <Link to={path} onClick={toggleMenu}>
                {title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/cart" onClick={toggleMenu} className="text-white ">
              <ShoppingCartIcon />
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <Link>
                <button
                  className="text-white "
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </Link>
            ) : (
              <Link>
                <button
                  className="text-white "
                  onClick={() => loginWithRedirect()}
                >
                  Log In
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
