import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import React from "react";

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home/>} />
<Route path="/profile" element={<Profile/>} />
        </Routes>
  );
}

export default App;