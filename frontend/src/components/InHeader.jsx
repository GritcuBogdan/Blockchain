import { ArrowDownIcon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InHeader = ({ user }) => {
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

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
                        <a className="hover:text-gray-300" href="/market">
                            Market
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

            <div className="relative">
                <div
                    className={`flex items-center gap-4 bg-[#303030] px-4 py-2 cursor-pointer ${
                        dropdownOpen ? "rounded-t-[30px]" : "rounded-full"
                    }`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    <img src={user.pfp} className="w-10 h-10 rounded-full object-cover" />
                    <div className="">
                        <p>{user.username}</p>
                        <p>
                            {user.totalBalance} {user.chosenCurrency}
                        </p>
                    </div>
                    <button className="bg-transparent border-none p-3 rounded-full hover:bg-[#404040] cursor-pointer">
                        <ArrowDownIcon />
                    </button>
                </div>

                {dropdownOpen && (
                    <div className="absolute left-0 top-full w-full bg-[#303030] rounded-b-lg shadow-lg text-white ">
                        <ul>
                            <li
                                className="px-4 py-2 hover:bg-[#404040] cursor-pointer"
                                onClick={() => navigate("/profile")}
                            >
                                Profile
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-[#404040] cursor-pointer"
                                onClick={() => navigate("/settings")}
                            >
                                Settings
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-[#404040] cursor-pointer"
                                onClick={() => navigate("/logout")}
                            >
                                Logout
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InHeader;
