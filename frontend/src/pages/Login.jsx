import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Login = () => {
    const [activeTab, setActiveTab] = useState("signin");
    const [currency, setCurrency] = useState("");
    const [signInData, setSignInData] = useState({ email: "", password: "" });
    const [signUpData, setSignUpData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
        baseCurrency: ""
    });
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dropdownRef.current.removeAttribute("open");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSignInChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    };

    const handleSignUpChange = (e) => {
        setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    };

    const handleSignInSubmit = async (e) => {
        e.preventDefault(); // Prevent form from reloading

        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/authentication", signInData);
            console.log("Sign in successful:", response.data);

            // Clear the form after successful login
            setSignInData({ email: "", password: "" });
        } catch (error) {
            console.error("Error during sign in:", error);
        }
    };

    const handleSignUpSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
                ...signUpData,
                baseCurrency: currency // Ensure the currency is included in the request
            });
            console.log("Sign up successful:", response.data);
            setSignUpData({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                confirmPassword: "",
                baseCurrency: ""
            }); // Clear the form
            setCurrency(""); // Clear the currency
        } catch (error) {
            console.error("Error during sign up:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-lg mb-40">
                <div
                    role="tablist"
                    className="tabs tabs-boxed mb-5 border border-white rounded-md justify-between items-center px-18"
                >
                    <button
                        role="tab"
                        className={`tab ${activeTab === "signin" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("signin")}
                        style={{ color: "white" }}
                    >
                        Sign In
                    </button>
                    <button
                        role="tab"
                        className={`tab ${activeTab === "signup" ? "tab-active" : ""}`}
                        onClick={() => setActiveTab("signup")}
                        style={{ color: "white" }}
                    >
                        Sign Up
                    </button>
                </div>
                <div className="relative h-[420px]">
                    <div
                        className={`card border border-white shadow-md p-6 absolute w-full transition-opacity duration-300 ${
                            activeTab === "signin"
                                ? "opacity-100 visible"
                                : "opacity-0 invisible"
                        }`}
                    >
                        <h2 className="text-xl font-semibold mb-2" style={{ color: "white" }}>
                            Log in to your account
                        </h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Enter your email and password to log in.
                        </p>
                        <form className="space-y-4" onSubmit={handleSignInSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={signInData.email}
                                onChange={handleSignInChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={signInData.password}
                                onChange={handleSignInChange}
                            />
                            <a
                                href="/reset-password"
                                className="text-sm text-primary block text-center"
                            >
                                Forgot your password?
                            </a>
                            <button className="btn btn-primary w-full bg-transparent">
                                Log In
                            </button>
                        </form>
                    </div>
                    <div
                        className={`card border border-white shadow-md p-6 absolute w-full transition-opacity duration-300 ${
                            activeTab === "signup"
                                ? "opacity-100 visible"
                                : "opacity-0 invisible"
                        }`}
                    >
                        <h2 className="text-xl font-semibold mb-2 text-white">Create a New Account</h2>
                        <p className="text-sm text-gray-500 mb-4">
                            Enter your details to create a new account.
                        </p>
                        <form className="space-y-4" onSubmit={handleSignUpSubmit}>
                            <input
                                type="text"
                                name="firstname"
                                placeholder="First Name"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={signUpData.firstname}
                                onChange={handleSignUpChange}
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Last Name"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={signUpData.lastname}
                                onChange={handleSignUpChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={signUpData.email}
                                onChange={handleSignUpChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={signUpData.password}
                                onChange={handleSignUpChange}
                            />
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={signUpData.confirmPassword}
                                onChange={handleSignUpChange}
                            />
                            <details
                                className="dropdown bg-transparent w-full"
                                ref={dropdownRef}
                            >
                                <summary className="btn bg-transparent w-full border border-gray-600 rounded-md text-white">
                                    {currency ? currency : "Select Currency"}
                                </summary>
                                <ul className="menu w-full dropdown-content rounded-box z-[1] p-2 shadow border border-white text-gray-100 bg-[#222222]">
                                    <li onClick={() => setCurrency("USD")}>
                                        <a>USD</a>
                                    </li>
                                    <li onClick={() => setCurrency("EUR")}>
                                        <a>EUR</a>
                                    </li>
                                    <li onClick={() => setCurrency("GBP")}>
                                        <a>GBP</a>
                                    </li>
                                </ul>
                            </details>

                            <button className="btn btn-primary w-full bg-transparent text-white">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
