import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";

const Navbar = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-black px-12">
          <div className="flex-1 px-2 mx-2 font-bold text-info">
            {" "}
            <span className="text-primary mr-1.5 text-2xl font-bold">
              CAR
            </span>{" "}
            MANUFACTURER
          </div>
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <Link
                  className="mx-.5 rounded-lg text-zinc-400 font-medium"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="mx-.5 rounded-lg text-zinc-400 font-medium"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="mx-.5 rounded-lg text-zinc-400 font-medium"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="mx-.5 rounded-lg text-zinc-400 font-medium"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="mx-.5 rounded-lg text-zinc-400 font-medium"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="mx-.5 rounded-lg text-zinc-400 font-medium"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <Link className="rounded-lg" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
