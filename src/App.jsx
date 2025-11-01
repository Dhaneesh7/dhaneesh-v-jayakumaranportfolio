import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import React, { useEffect } from "react";
import Intro from "./pages/Intro";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true,     // Whether animation should happen only once
      offset: 100,    // How far before the element enters viewport to trigger
    });
  }, []);
    useEffect(() => {
    const handleRouteChange = () => {
      AOS.refresh(); // important when navigating between routes
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
  return (
    
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home/>} />
<Route path="/profile" element={<Profile/>} />
        </Routes>
  );
}
export default App;