import '../style/Project.scss'
import '../style/Card.scss'

import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

import Arrow from "../components/Arrow.jsx";
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

function ProjectPage() {
    const location = useLocation();
    const urlName = location.pathname.slice(1);

    const [project, setProject] = useState([]);
    useEffect(() => {
        async function fetch() {
            const response = await axios.get('/assets/data.json');
            setProject(response.data);
        }
        fetch();
    }, []);

    return (
        <div id="parentDetailPorject">
            {project.map(item => {
                if (item.name === urlName) {
                    return (
                        <motion.div
                            initial={{ opacity: 1}}
                            animate={{ opacity: 1}}
                            transition={{
                                duration: 2.5,
                                type: "spring", bounce: 0.25,
                                delay: 1.5
                            }}
                            data-scroll-container data-scroll data-scroll-speed="3"
                            className="ProjectPage_Container">
                            <div className="grid3">
                                <div className="TitleCard card">
                                    <h1>{item.name}</h1>
                                    <h2>{item.type}</h2>
                                </div>
                                <a href={item.url} target="_blank" rel="noopener" className="LinkCard card">
                                    <Arrow  />
                                </a>
                            </div>
                            <figure>
                                <img className="notInvert" src={item.image} alt={item.name}/>
                            </figure>
                            <div className="grid2">
                                <div className="card desc">
                                    <h3>About it</h3>
                                    <p>{item.desc}</p>
                                </div>
                                <div>
                                    <div className="grid2 card">

                                    </div>
                                    <div className="luxury-text QuoteCard card">
                                        <div>
                                            <span>{item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                }
            })}
        </div>
    )
}

export default ProjectPage