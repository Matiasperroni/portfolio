import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./nav.module.css";
import { useState } from 'react';

const NavBar = () => {
    const [burgerClass, setburgerClass] = useState(`${styles.burguerBar} ${styles.unclicked}`)
    const [menuClass, setmenuClass] = useState(`${styles.containerNavLinks} ${styles.hidden}`)
    const [isMenuClicked, setisMenuClicked] = useState(false)
    const updateMenu = () => {
        if(!isMenuClicked) {
            setburgerClass(`${styles.burguerBar} ${styles.clicked}`)
            setmenuClass(`${styles.containerNavLinks} ${styles.visible}`)
        } else {
            setburgerClass(`${styles.burguerBar} ${styles.unclicked}`)
            setmenuClass(`${styles.containerNavLinks} ${styles.hidden}`)
        }
        setisMenuClicked(!isMenuClicked)
    }
    return (
        <div className={styles.container}>
            <div className={styles.burgerMenu} onClick={updateMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
            <div className={styles.titleNav}>
                <h1>Portfolio</h1>
            </div>
            
            <div className={menuClass}>
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
