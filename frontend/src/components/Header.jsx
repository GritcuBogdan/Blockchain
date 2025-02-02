import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="px-10 py-5 text-white flex flex-row items-center justify-between">
      <a href="/">
        <h1 className="text-5xl font-bold">STRATEGOS</h1>
      </a>
      <div className="justify-between">
        <ul className="flex flex-row text-xl gap-10">
          <li>
            <a className="hover:text-gray-300" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/start">
              Start
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/charts">
              Charts
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-gray-300" href="/faq">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <button
        className="px-8 py-2 rounded-full cursor-pointer text-xl border border-white"
        onClick={() => navigate("/login")}
      >
        Login
      </button>
    </div>
  );
};

export default Header;
