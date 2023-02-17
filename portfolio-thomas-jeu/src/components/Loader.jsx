import '../style/Loader.scss'
import spinner from "../assets/img/spinner.svg";

import { motion, useMotionValue } from "framer-motion"

function Loader() {
    return (
        <motion.div
            initial={{ y: 0}}
            animate={{ y: -2000}}
            transition={{
                duration: 1,
                type: "spring", bounce: 0.25,
                delay: 1.7
            }}
            className="Loader">
            <div className="grid3">
                <div className=""></div>
                <div className="card"></div>
                <div className="spin card">
                    <img src={spinner} alt="Spinner"/>
                </div>
            </div>
            <div className="grid3">
                <div></div>
                <div className="h2">
                    <h2>Loading...</h2>
                </div>
                <div></div>
            </div>
            <div className="board grid3">
                <div className="card">
                    <div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                        <div>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                            <span className="luxury-text">LOADING</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Loader