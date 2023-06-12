import React from "react";
import styles from "./home.module.css";
import webImg from "../../assets/images/foto.png";

const Home = () => {
    return (
        <div className={styles.container} id='Home'>
            <div className={styles.contentContainer}>
                <h2>Hi, I am Matias Perroni</h2>
                <h5>Fullstack Developer</h5>
                <div className={styles.buttonsCont}>
                    <a
                        href='https://www.canva.com/design/DAE2LWKPvDQ/YyZGrP7IwGJ_Bm74MqIP3g/edit?utm_content=DAE2LWKPvDQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
                        target='_blank'
                    >
                        <button className={styles.buttonOne}>View CV</button>
                    </a>

                    <a
                        href='https://www.linkedin.com/in/matias-perroni/'
                        target='_blank'
                    >
                        <button className={styles.buttonTwo}>
                            Linkedin Profile
                        </button>
                    </a>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <img
                    className={styles.imgHome}
                    src={webImg}
                    alt='imagen random de algo sobre programacion'
                />
            </div>
        </div>
    );
};

export default Home;
