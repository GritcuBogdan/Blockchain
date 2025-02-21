import React, { useState, useRef, useEffect } from "react";

const Login = () => {
    const [activeTab, setActiveTab] = useState("signin");
    const [currency, setCurrency] = useState("");
    const dropdownRef = useRef(null);

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await fetch("http://localhost:8080/api/v1/auth/authentication", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include", // Permite cookie-urilor să fie salvate și trimise automat
                    body: JSON.stringify({ email, password }),
                });

                if (!response.ok) {
                    throw new Error("Autentificare eșuată!");
                }

                alert("Autentificare reușită!");
            } catch (error) {
                console.error("Eroare autentificare:", error.message);
            }
        };

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                dropdownRef.current.removeAttribute("open");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

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
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={login.email}
                                onChange={(e) => {
                                    setLogin({...login, email: e.target.value})
                                }}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                                value={login.password}
                                onChange={(e) => {
                                    setLogin({...login, password: e.target.value})
                                }}
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
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full bg-transparent text-gray-100"
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input input-bordered w-full bg-transparent"
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
