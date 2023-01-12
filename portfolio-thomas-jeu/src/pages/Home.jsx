import '../style/Home.scss'
import '../style/Card.scss'

import LocomotiveScroll from 'locomotive-scroll';
import React, {useEffect, useRef, useState} from "react";
import { motion, useMotionValue } from "framer-motion"

import spotifyLogo from '../assets/img/spotify.png';
import arrowe from "../assets/img/arrow.svg";

import Paperplane from "../components/home/Paperplane.jsx";
import Arrow from "../components/Arrow.jsx";
import Song from "../components/home/Song.jsx";
import CanvaThree from "../components/CanvaThree.jsx";
import CardProject from "../components/home/CardProject.jsx";
import {Link} from "react-router-dom";
import axios from 'axios';
import SplineScene from "../components/Spline.jsx"

function HomePage() {
    const [project, setProject] = useState([]);
    useEffect(() => {
        async function fetch() {
            const response = await axios.get('/assets/data.json');
            setProject(response.data);
        }
        fetch();
    }, []);

    const [son, setSon] = useState([]);
    useEffect(() => {
        async function fetchSon() {
            const response = await axios.get('/assets/song.json');
            setSon(response.data);
        }
        fetchSon();
    }, []);

    let HomePage_Container = useRef(null);

    useEffect(() => {
        new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            getDirection: true
        });

    }, []);

    return (
        <motion.div
            initial={{ opacity: 1}}
            animate={{ opacity: 1}}
            transition={{
                duration: 2.5,
                type: "spring", bounce: 0.25,
                delay: 1.5
            }}
            data-scroll-container
            data-scroll data-scroll-speed="3"
            className="HomePage_Container">
            <div className="grid3">
                <div className="FancyCard card">
                    <h3 data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-position="left"
                        data-scroll-speed="1">CLEAN & <br/> CLEAR</h3>
                    <span>&</span>
                    <h4 data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-position="left"
                        data-scroll-speed="3" className="fancy-text">SOMETHING DIFFERENT</h4>
                </div>
                {project.map(item => {
                    if (item.id === 1) {
                        return (
                            <CardProject key={item.id} {...item}/>
                        );
                    }
                })}
            </div>
            <div className="grid3">
                <div className="TitleCard card">
                    <h1>Thomas Jeu</h1>
                    <h2>Front-End Developer</h2>
                </div>
                <Link to="/project" className="LinkCard card">
                    <Arrow  />
                </Link>
            </div>
            <div className="grid3">
                {project.map(item => {
                    if (item.id === 2) {
                        return (
                            <CardProject key={item.id} {...item}/>
                        );
                    }
                })}
                <div className="card">
                    <CanvaThree />
                </div>
                <div className="QuoteCard card">
                    <div>
                        <span data-scroll
                              data-scroll-direction="horizontal"
                              data-scroll-position="left"
                              data-scroll-speed=".5" className="luxury-text">LETS MAKE WEB CHIC</span>
                    </div>
                </div>
            </div>
            <div className="grid2 border-bottom">
                <div className="ResumeCard card">
                    <svg id="myResume" width="412" height="151" viewBox="0 0 412 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.07518 79.9941C1.07518 66.6002 1.07518 53.2062 1.07518 39.8122C1.07518 34.0855 1.07518 28.3588 1.07518 22.6321C1.07518 20.2569 0.586166 19.1029 2.10256 21.6618C7.51742 30.7993 11.0878 41.3295 17.4562 50.086C18.7504 51.8655 25.5151 59.9472 25.7323 54.0813C26.2975 38.8216 35.2895 22.1873 41.0289 8.24874C41.6089 6.83997 42.3746 1 44.6818 1C45.7446 1 45.4066 11.623 45.4808 12.4153C47.1834 30.5758 51.4168 49.5636 51.4168 67.6656" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M64.7728 29.6525C65.8222 33.8499 70.1151 37.8129 72.4211 41.4103C75.1058 45.5984 77.7334 49.8047 81.268 53.3393C84.8371 56.9084 93.2426 60.0115 95.5942 64.1268C96.8138 66.261 115.609 85.6637 116.142 85.131" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M159.292 10.1323V84.1037" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M159.292 7.05014C169.785 7.05014 183.042 4.92496 187.83 16.2966C190.768 23.2733 182.746 29.6831 177.67 32.221C172.862 34.6254 167.624 35.7537 162.888 38.3852C161.754 39.0148 155.899 39.9263 159.063 39.9263C175.341 39.9263 191.404 58.5674 201.7 69.5491C206.465 74.6326 210.522 79.5779 212.716 86.1584" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M224.017 65.6108C230.124 65.6108 234.975 69.7204 241.482 69.7204C245.995 69.7204 252.318 71.0161 255.866 67.6656C261.569 62.2786 263.057 55.7568 263.057 48.1454C263.057 45.1181 264.169 39.0311 262.486 36.3876C260.202 32.7979 255.532 32.0507 251.984 30.6799C248.559 29.3564 236.459 24.4151 233.263 28.8534C229.737 33.7509 227.759 36.7675 228.126 43.0085C228.382 47.3582 240.478 48.1454 243.537 48.1454C246.863 48.1454 249.324 48.2407 252.27 46.6043C254.314 45.4684 256.584 44.0358 258.948 44.0358" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M281.55 29.6525C281.55 32.2229 277.122 40.7797 280.523 42.7801C283.108 44.3011 291.168 44.6072 291.767 48.2024C293.819 60.5174 271.14 68.6929 262.03 68.6929" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M297.988 33.7621C297.988 45.9054 297.235 57.5243 302.668 68.693C303.299 69.9887 314.705 82.622 315.454 75.8847C315.793 72.8334 317.67 69.5961 318.307 66.4099C319.361 61.1445 320.59 55.8036 320.59 50.4285C320.59 42.8182 320.59 35.208 320.59 27.5978" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M336.001 27.5978C336.001 37.5291 336.001 47.4605 336.001 57.3918C336.001 60.7784 336.001 64.1649 336.001 67.5515C336.001 70.683 335.762 61.2719 335.202 58.1909C333.962 51.3708 333.077 37.8887 337.485 32.221C340.028 28.952 347.484 27.8138 350.385 31.9356C357.285 41.742 359.631 54.1713 359.631 66.0675C359.631 76.7653 358.371 44.6857 358.604 33.9904C358.847 22.7798 367.414 29.821 370.932 34.8465C376.864 43.3209 379.089 52.0689 382.233 61.5013" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M384.288 33.762C391.778 33.762 391.916 25.3003 388.911 19.8924C384.988 12.8302 378.772 7.02414 377.154 18.3513C375.749 28.1834 377.613 34.8489 384.516 41.7528C389.387 46.6231 393.967 51.0134 400.498 53.853C402.523 54.7336 410.138 56.6953 411 58.4192" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M93.5394 61.5013C90.0515 61.0653 99.535 26.1409 102.786 24.5156" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M29.0057 113.416C45.2622 115.027 61.5322 116.834 77.8124 118.125C111.408 120.789 144.595 118.49 177.689 117.29C212.519 116.028 247.043 113.852 281.518 111.29C312.797 108.965 344.276 107.918 375.721 106.304C382.957 105.933 390.107 105.37 397.307 104.887C399.957 104.709 403.51 105.328 405.981 104.921C406.446 104.845 398.061 104.917 396.053 104.953C377.779 105.282 359.534 105.445 341.136 105.036C309.992 104.345 279.324 106.114 248.375 106.545C208.269 107.104 168.884 111.66 128.974 113.161C117.293 113.601 81.7802 108.929 93.5695 110.097C148.883 115.579 204.168 122.708 259.608 126.551C280.984 128.033 302.662 129.42 324.021 129.79C325.244 129.811 334.653 130.078 332.656 129.217" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <svg id="sun" width="273" height="241" viewBox="0 0 273 241" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M113.548 1C113.548 18.0725 113.548 35.1449 113.548 52.2174C113.548 61.9795 116.649 67.5451 122.573 75.1619C130.501 85.354 138.693 93.5777 149.976 99.8462C158.8 104.748 168.673 108.323 177.923 112.352C187.15 116.37 195.105 122.546 204.673 125.836C210.048 127.683 215.356 129.428 220.767 131.164C222.283 131.65 224.113 133.121 225.606 133.121C231.676 133.121 237.987 134.1 244.255 134.1C253.175 134.1 262.004 135.079 271.114 135.079" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M1 44.0617C18.1595 44.0617 35.6422 45.2955 52.6523 42.8655C62.0455 41.5236 76.2341 40.2709 83.2087 33.2963" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M26.4456 108.654C35.1221 108.654 41.3508 108.824 49.1726 104.522C59.0551 99.0867 69.0056 94.1301 78.8047 88.5914C83.5332 85.9188 90.271 80.2727 95.9315 80.2727" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M64.6139 183.034C73.9306 173.717 85.7358 166.776 95.8228 158.241C103.15 152.041 109.977 145.192 118.387 140.461C120.449 139.301 123.336 136.787 124.313 134.589C127.487 127.447 133.914 121.31 138.993 115.505" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M172.268 130.185C175.799 132.392 173.247 150.335 173.247 154.054C173.247 159.002 173.247 163.949 173.247 168.897C173.247 174.273 173.047 178.838 171.29 184.012C168.66 191.754 165.739 198.868 161.557 205.924C160.498 207.711 156.752 217.857 155.631 213.373" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M229.031 151.716C229.031 170.877 229.743 190.205 228.977 209.349C228.615 218.397 225.788 226.559 224.192 235.338C223.597 238.611 222.957 241.249 221.202 236.861" stroke="#1B202C" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <Paperplane />
                    <Paperplane />
                    <Paperplane />
                    <p>* tap on a paper plane</p>
                </div>
                <div className="card">
                    <ul>
                        {project.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="grid3">
                {project.map(item => {
                    if (item.id === 3) {
                        return (
                            <CardProject key={item.id} {...item}/>
                        );
                    }
                })}
                <div className="SpotifyCard card">
                    <h3>Discover Me !</h3>
                    <img className="logoSpotify notInvert" src={spotifyLogo} alt="Spotify Logo"/>
                    <div className="playlist">
                        {son.map(item => (
                            <Song {...item}/>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid2">
                <div className="ContactCard card">
                    <div>
                        <h3>Get It Touch</h3>
                        <form id="form" action="../../contactform.php" method="POST">
                            <input type="text" name="name" id="name" placeholder="Your Name" required/>
                            <input type="email" name="email" id="email" placeholder="Your Email" required/>
                            <textarea name="message" placeholder="Your Message" id="message" required></textarea>
                            <button type="submit">
                                <img src={arrowe} alt=""/>
                            </button>
                        </form>
                    </div>
                    <div className="links">
                        <a href="https://www.instagram.com/thomas_jeu/?hl=en" rel="noopener" target="_blank" className="hover-effect">
                            <div>
                                <span>@thomas_jeu</span>
                                <span>@thomas_jeu</span>
                            </div>
                        </a>
                        <a href="tel:0782755064" className="hover-effect">
                            <div>
                                <span>+33 782 755 064</span>
                                <span>+33 782 755 064</span>
                            </div>
                        </a>
                        <a href="mailto:jeuthomas03@gmail.com" className="hover-effect">
                            <div>
                                <span>jeuthomas03@gmail.com</span>
                                <span>jeuthomas03@gmail.com</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <SplineScene />
                </div>
            </div>
        </motion.div>
    )
}

export default HomePage