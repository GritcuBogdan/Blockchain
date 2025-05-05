import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import "./global/global.scss";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import InHeader from "./components/InHeader";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import CryptoTable from "./components/CryptoTable";
import { useEffect, useState } from "react";
import ChartPage from "./pages/ChartPage";
import TOS from "./pages/TOS";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Profile from "./pages/Profile";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

function App() {
    const location = useLocation();
    const showFooter =
        location.pathname !== "/login" &&
        !location.pathname.includes("/chart") &&
        !location.pathname.includes("/profile");
    const showHeader =
        !location.pathname.includes("/chart") &&
        !location.pathname.includes("/profile");

    const [user, setUser] = useState(null);

    const johnny = {
        pfp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWA3ujtopAjlWjVmzxvlhol5G7f5CNZV3IQ&s",
        firstname: "Johnny",
        lastname: "Sins",
        email: "johnnysins@gmail.com",
        username: "JohnnyThaSlayah",
        totalBalance: 4236.42,
        chosenCurrency: "USD",
    };

    useEffect(() => {
        setUser(johnny);
    }, []);

    return (
        <div className="font-mono">
            {showHeader && (user ? <InHeader user={user} /> : <Header />)}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tos" element={<TOS />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/market" element={<CryptoTable />} />
                <Route path="/chart/:ticker" element={<ChartPage user={user} />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
            </Routes>
            {showFooter && <Footer />}
        </div>
    );
}

export default App;
