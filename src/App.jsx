import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";
import { WiStars } from "react-icons/wi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen flex-col items-center overflow-y-scroll  bg-dominant font-Inter text-white">
        <div className="absolute z-0 h-full w-full">
          <WiStars className="absolute right-4 bottom-2/4 animate-pulse text-9xl drop-shadow-2xl" />
          <WiStars className="absolute top-20 left-20 animate-pulse text-9xl drop-shadow-2xl" />
          <WiStars className="absolute top-40 right-20 animate-pulse text-9xl drop-shadow-2xl" />
          <WiStars className="absolute top-60  animate-pulse text-9xl drop-shadow-2xl" />
          <WiStars className="absolute bottom-20 right-20 animate-pulse text-9xl drop-shadow-2xl" />
          <WiStars className="absolute top-2 left-2/4 animate-pulse text-9xl drop-shadow-2xl" />
          <WiStars className="absolute bottom-0 left-2/4 animate-pulse text-9xl drop-shadow-2xl" />
          <WiStars className="absolute bottom-5 left-5 animate-pulse text-9xl drop-shadow-2xl" />
        </div>
        <Navbar />
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<SignUpPage />} path="/signup" />
          <Route element={<SignInPage />} path="/signin" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
