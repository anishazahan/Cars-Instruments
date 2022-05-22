import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({children}) => {
  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar bg-black px-12">
          <div class="flex-1 px-2 mx-2 font-bold text-info"> <span className="text-error mr-1.5">CAR</span> MANUFACTURER</div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <li>
                <Link className="mx-1 rounded-lg text-zinc-400 font-medium"  to="/home">Home</Link>
              </li>
              <li>
                <Link className="mx-1 rounded-lg text-zinc-400 font-medium" to="/about">About</Link>
              </li>
              <li>
                <Link className="mx-1 rounded-lg text-zinc-400 font-medium" to="/services">Services</Link>
              </li>
              <li>
                <Link className="mx-1 rounded-lg text-zinc-400 font-medium" to="/blog">Blog</Link>
              </li>
              <li>
                <Link className="mx-1 rounded-lg text-zinc-400 font-medium" to="/contact">Contact</Link>
              </li>
              <li>
                <Link className="mx-1 rounded-lg text-zinc-400 font-medium" to="login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
        <li>
                <Link className="rounded-lg" to="/home">Home</Link>
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
