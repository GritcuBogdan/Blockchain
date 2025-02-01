import React from "react";
import "../index.css";
import TradingViewBTC from "../components/TradeViewWidgets/TradingViewBTC";
import { ChartArea, File, Globe, Shield } from "lucide-react";
import bnblogo from "../images/BinanceLogo.png";
import bitslogo from "../images/BitstampLogo.png";
import coinbaselogo from "../images/CoinbaseLogo.png";
import kulogo from "../images/KUCOINLogo.png";
import kraken from "../images/krakenLogo.svg";

const Home = () => {
  const logos = [bnblogo, bitslogo, coinbaselogo, kraken, kulogo];
  return (
    <div className="text-white px-10 items-center justify-center flex flex-col">
      <section className="items-center justify-center flex flex-col gap-5 mt-32 mb-20">
        <div className="flex flex-row items-center gap-2 border border-white rounded-full px-2 py-1">
          <Globe className="w-5 h-5 rounded-full" />
          <a href="https://bitcoin.org/en/" className="">
            Powered by The Blockchain
          </a>
        </div>
        <h1 className="text-8xl text-center mt-5 font-bold">
          DEMO TRADE TODAY, FOR A WISER TOMORROW
        </h1>
        <p className="text-gray-300 text-xl font-extralight mb-10">
          Real-Time Data, Charts, Tools & much more.
        </p>
        <div className="relative group">
          <div className="absolute inset-0 bg-gray-500 blur-lg rounded-full opacity-75 group-hover:opacity-100 transition duration-200 "></div>
          <button className="relative bg-[#222222] px-8 py-2 rounded-full cursor-pointer text-xl border border-white transition duration-200">
            Start Today
          </button>
        </div>
      </section>
      <section className="w-[80%] h-[500px]">
        <TradingViewBTC className="h-full" />
      </section>
      <section className="flex flex-col gap-3 text-4xl w-[60%] items-center justify-center text-left my-20">
        <div className="flex flex-col gap-3 text-4xl items-center justify-center text-left text-gray-400 ">
          <h1 className="hover:text-white">
            We're dedicated to helping traders have a sandbox, where they can
            simulate real-time trading.
          </h1>
          <br />
          <h1 className="hover:text-white">
            Anyone can benefit from this, beginner to the elite, anyone can do
            it.
          </h1>
          <br />
          <h1 className="hover:text-white">
            Removing the fear of losing real money, replacing it with demo
            money.
          </h1>
          <br />
          <h1 className="hover:text-white">
            Our app helps you hone your trading skills.
          </h1>
        </div>
      </section>
      <section className="flex flex-col items-center text-center px-[50px]">
        <h1 className="text-6xl mb-4">What we offer</h1>
        <h4 className="text-2xl mb-6">
          Our platform currently offers features like:
        </h4>
        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col items-center border border-white rounded-lg p-5 w-1/3">
            <Shield className="w-32 h-32 my-10" />
            <div className="relative rounded-lg bg-[#333333] p-2 overflow-hidden">
              <div className="absolute inset-0 rounded-lg border-2 border-white/20 backdrop-blur-md"></div>

              <h1 className="text-3xl relative z-10">Security You Can Trust</h1>
              <p className="text-xl relative z-10">
                Great security to keep your assets and data secure.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center border border-white rounded-lg p-5 w-1/3">
            <File className="w-32 h-32 my-10" />
            <div className="relative rounded-lg bg-[#333333] p-2 overflow-hidden">
              <div className="absolute inset-0 rounded-lg border-2 border-white/20 backdrop-blur-md"></div>

              <h1 className="text-3xl relative z-10">Accessibility</h1>
              <p className="text-xl relative z-10">
                Manage your investments anywhere at anytime.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center border border-white rounded-lg p-5 w-1/3">
            <ChartArea className="w-32 h-32 my-10" />
            <div className="relative rounded-lg bg-[#333333] p-2 overflow-hidden">
              <div className="absolute inset-0 rounded-lg border-2 border-white/20 backdrop-blur-md"></div>

              <h1 className="text-3xl relative z-10">Real-Time Data</h1>
              <p className="text-xl relative z-10">
                Real-Time charts and data to help you make wise decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center text-center my-20 w-full">
        <h1 className="text-6xl mb-4">Current Data</h1>
        <p className="text-2xl mb-6">
          We currently gather data from these exchanges and many more
        </p>

        <div className="ticker-container mt-10">
          <div className="ticker-content">
            {[...logos, ...logos].map((logo, index) => (
              <img key={index} src={logo} className="h-11 w-auto mx-3" />
            ))}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center text-center my-20">
        <h1 className="text-6xl mb-4">
          Start Demo Trading Today, For Stellar Results Tomorrow
        </h1>
        <p className="text-2xl mb-6">
          Sign up and get started demo trading today
        </p>
        <div className="relative group">
          <div className="absolute inset-0 bg-gray-500 blur-lg rounded-full opacity-75 group-hover:opacity-100 transition duration-200 "></div>
          <button className="relative bg-[#222222] px-8 py-2 rounded-full cursor-pointer text-xl border border-white transition duration-200">
            Sign Up
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
