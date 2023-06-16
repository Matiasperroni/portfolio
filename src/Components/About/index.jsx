import React from "react";
import styles from "./about.module.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import jsIcon from "../../assets/images/logojs.png";
import expressIcon from "../../assets/images/logoexpress.png";
import reactIcon from "../../assets/images/reactlogo.png";
import firebaseIcon from "../../assets/images/firebaselogo.png";
import gitIcon from "../../assets/images/gitlogo.png";
import nodeIcon from "../../assets/images/nodelogo.png";
import mongoIcon from "../../assets/images/mongologo.png";
import htmlIcon from "../../assets/images/htmllogo.png";
import cssIcon from "../../assets/images/csslogo.png";

const About = () => {
    return (
        <>
            <section className={styles.container} id='About'>
                <h1>About Me</h1>
                <div className={styles.parrafContainer}>
                    <p>
                        I am passionate about technology looking to enter the
                        world of programming. I focus on web development and I
                        am currently learning Javascript, both in Frontend and
                        Backend. My goal is to implement everything that i
                        learned so far and keep acquiring knowledge to become an
                        efficient developer.
                    </p>
                </div>
                <div className={styles.linksCont}>
                    <div className={styles.card}>
                        <PersonIcon />
                        <h3>Full Name</h3>
                        <h5>Matias Perroni</h5>
                    </div>
                    <div className={styles.card}>
                        <EmailIcon />
                        <h3>Email Addres</h3>
                        <a
                            href='mailto:matiperroni.96@gmail.com'
                            target='_blank'
                        >
                            <h5>matiperroni.96@gmail.com</h5>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <GitHubIcon />
                        <h3>Github</h3>
                        <h5>
                            <a
                                href='https://github.com/Matiasperroni'
                                target='_blank'
                            >
                                Go to Github
                            </a>
                        </h5>
                    </div>
                    <div className={styles.card}>
                        <LinkedInIcon />
                        <h3>Linkedin</h3>
                        <h5>
                            <a
                                href='https://www.linkedin.com/in/matias-perroni/'
                                target='_blank'
                            >
                                Go to Linkedin
                            </a>
                        </h5>
                    </div>
                </div>
                    <h2 className={styles.stackTitle}>Software Stack</h2>
                <div className={styles.stack}>
                    <img src={htmlIcon} alt="logo mongoDB" />  
                    <img src={cssIcon} alt="logo mongoDB" />                      
                    <img src={jsIcon} alt="logo javascript" />
                    <img src={reactIcon} alt="logo react" />
                    <img src={firebaseIcon} alt="logo firebase" />
                    <img src={nodeIcon} alt="logo node" />
                    <img src={expressIcon} alt="logo express" />
                    <img src={mongoIcon} alt="logo mongoDB" />
                    <img src={gitIcon} alt="logo git" />
                </div>
            </section>
        </>
    );
};

export default About;
