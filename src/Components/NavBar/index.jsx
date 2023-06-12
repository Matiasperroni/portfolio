import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./nav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleNav}>
                <h1>Portfolio</h1>
            </div>
            <div className={styles.containerNavLinks}>
                <HashLink className={styles.navLink} to="#Home" smooth>
                    <p>Home</p>
                </HashLink>
                <HashLink className={styles.navLink} to="#About" smooth>
                    <p>About</p>
                </HashLink>
                <HashLink className={styles.navLink} to="#Projects" smooth>
                    <p>Projects</p>
                </HashLink>
                <HashLink className={styles.navLink} to="#Contact" smooth>
                    <p>Contact</p>
                </HashLink>
            </div>
        </div>
    );
};

export default NavBar;
