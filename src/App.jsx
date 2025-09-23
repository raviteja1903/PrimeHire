import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import SplashScreen from "./animations/SplashScreen";

import Cards from "./Cards/Cards";
import LoginPage from "./components/LoginPage";
import ChatBot from "./ChatBot/ChatBot";
import Home from "./HomePage/Home";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const hideNavbarRoutes = ["/ChatBot", "/login"];
  const showNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          {showNavbar && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai-agent" element={<Cards />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/ChatBot" element={<ChatBot />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
