import './style/App.scss'

import React, {useEffect, useState} from "react";

import Nav from "./components/Nav.jsx";
import Loader from "./components/Loader.jsx";
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import Project from "./pages/Project.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, []);

    return (
        <div className="main">
            <div className="main-container"></div>
            <Nav />
            {loading ? (<Loader />) : (<div></div>)}
            <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route exact path="/:projectName" element={<Project />} />
                <Route path='*' element={<NotFound/>} />
            </Routes>
        </div>
    );
}

export default App
