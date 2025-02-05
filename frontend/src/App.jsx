import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import "./global/global.scss";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
import Login from "./pages/Login.jsx";

function App() {
    const location = useLocation();
    const showFooter = location.pathname !== "/login";

    return (
        <div className="font-mono">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            {showFooter && <Footer />}
        </div>
    );
}

export default App;
