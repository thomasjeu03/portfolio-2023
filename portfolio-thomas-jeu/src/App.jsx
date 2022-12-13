import './style/App.scss'
import Nav from "./components/Nav.jsx";
import HomePage from "./pages/Home.jsx";
import Loader from "./components/Loader.jsx";
import React, {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return (
        <div className="main">
            <div className="main-container"></div>
            <Nav />
            {loading ? (<Loader />) : (<div></div>)}
            (<HomePage/>)
        </div>
    );
}

export default App
