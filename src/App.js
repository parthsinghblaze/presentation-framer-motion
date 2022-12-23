import { Routes, Route, useLocation } from 'react-router-dom'
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import About from "./pages/About";
import { AnimatePresence } from 'framer-motion';
import "./App.css"

function App() {
    const location = useLocation()

    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default App;
