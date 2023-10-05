import '../style/NotFound.scss'

import React, { useEffect ,useRef} from "react";
import {motion} from "framer-motion";
import Arrow from "../components/Arrow.jsx";

function NotFound() {
    return (
        <motion.div initial={{ opacity: 1}} animate={{ opacity: 1}} transition={{ duration: 2.5, type: "spring", bounce: 0.25, delay: 1.5}}
                    data-scroll-container data-scroll data-scroll-speed="3"
                    className="NotFoundPage_Container">
            <div className="grid3">
                <div className="TitleCard card">
                    <h1>404</h1>
                    <h2>Page Not Found</h2>
                </div>
                <a href="/" rel="noopener" className="LinkCard card">
                    <Arrow  />
                </a>
            </div>
            <figure>
                <img className="notInvert" src="https://cdn.dribbble.com/users/1129101/screenshots/3513987/404.gif" alt="Page 404"/>
            </figure>
        </motion.div>
    )
}

export default NotFound