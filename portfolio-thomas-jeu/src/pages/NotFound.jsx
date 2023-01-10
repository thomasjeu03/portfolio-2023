import '../style/NotFound.scss'

import React, { useEffect ,useRef} from "react";
import {motion} from "framer-motion";

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
            </div>
            <div>

            </div>
        </motion.div>
    )
}

export default NotFound