import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import "./global/global.scss";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-mono">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
