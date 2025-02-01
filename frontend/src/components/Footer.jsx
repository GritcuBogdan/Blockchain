import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#1a1a1a] px-10 py-5">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-col text-left justify-center text-white">
          <a href="/">
            <h1 className="text-7xl font-bold mb-2">Strategos</h1>
          </a>
          <p className="text-xl ">The Demo Trading Platform</p>
          <div className="flex items-center gap-5 mt-5">
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook text-xl text-white hover:text-black hover:bg-white border rounded-full border-white hover:border-[#ddd] p-3"></i>
            </a>
            <a href="https://www.twitter.com/">
              <i className="fab fa-twitter text-xl text-white hover:text-black hover:bg-white border rounded-full border-white hover:border-[#ddd] p-3"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram text-xl text-white hover:text-black hover:bg-white border rounded-full border-white hover:border-[#ddd] p-3"></i>
            </a>
          </div>
        </div>
        <div className="text-white flex flex-row gap-10">
          <div className="">
            <h1 className="text-2xl mb-4">App</h1>
            <ol className="list-none flex flex-col gap-2">
              <li>
                <a className="hover:text-[#ddd]" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a className="hover:text-[#ddd]" href="/charts">
                  Charts
                </a>
              </li>
              <li>
                <a className="hover:text-[#ddd]" href="/market">
                  Market
                </a>
              </li>
            </ol>
          </div>
          <div className="">
            <h1 className="text-2xl mb-4">Community</h1>
            <ol className="list-none flex flex-col gap-2">
              <li>
                <a className="hover:text-[#ddd]" href="/discord-server">
                  Discord Server
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <hr className="w-[90%] text-[#444444] items-center my-5" />
      <div className="flex flex-row items-center justify-between w-full text-white">
        <p>Ⓒ 2025 Strategos. All Rights Reserved.</p>
        <div className="flex gap-5">
          <a href="/tos">
            <p className="hover:text-[#ddd]">Terms & Services</p>
          </a>
          <a href="/privacy-policy">
            <p className="hover:text-[#ddd]">Privacy Policy</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
