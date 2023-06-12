import React from "react";
import styles from "./projects.module.css";
const gifReactEcommerce = "https://i.imgur.com/gxpcId0.mp4";
const gifJsEcommerce = "https://i.imgur.com/vWQIngS.mp4";

const Projects = () => {
    return (
        <div className={styles.container} id='Projects'>
            <h1>Check some of my projects</h1>
            <div className={styles.videosCont}>
                <div className={styles.videoBox}>
                    <video
                        src={gifReactEcommerce}
                        loop
                        autoPlay
                        muted
                        alt='react ecommerce preview'
                    />
                    <h4>
                        Ecommerce made with Javascript, React, CSS, Firebase
                    </h4>
                    <div className={styles.parrafCont}>
                        <a
                            href='https://entrega-final-perroni-react-matiasperroni.vercel.app/'
                            target='_blank'
                        >
                            View online
                        </a>
                        <a
                            href='https://github.com/Matiasperroni/entrega-final-perroni-react'
                            target='_blank'
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
                <div className={styles.videoBox}>
                    <video
                        src={gifJsEcommerce}
                        loop
                        autoPlay
                        muted
                        alt='react ecommerce preview'
                    />
                    <h4>Ecommerce made with Javascript, CSS, SASS</h4>
                    <div className={styles.parrafCont}>
                        <a
                            href='https://matiasperroni.github.io/Matias-Perroni-JS-Entrega-Final/'
                            target='_blank'
                        >
                            View online
                        </a>
                        <a
                            href='https://github.com/Matiasperroni/Matias-Perroni-JS-Entrega-Final'
                            target='_blank'
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
