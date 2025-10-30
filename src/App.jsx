import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import React from "react";
import Intro from "./pages/Intro";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home/>} />
<Route path="/profile" element={<Profile/>} />
        </Routes>
  );
}

export default App;