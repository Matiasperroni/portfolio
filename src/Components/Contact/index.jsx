import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <div className={styles.container} id='Contact'>
            <h1>Contact</h1>
            <h2>Feel free to leave a message!</h2>
            <div className={styles.inputsCont}>
                <div className={styles.form}>
                    <input
                        type='text'
                        name='text'
                        autoComplete='off'
                        required
                    />
                    <label htmlFor='text' className={styles.labelName}>
                        <span className={styles.contentName}>Name</span>
                    </label>
                </div>
                <div className={styles.form}>
                    <input
                        type='text'
                        name='text'
                        autoComplete='off'
                        required
                    />
                    <label htmlFor='text' className={styles.labelName}>
                        <span className={styles.contentName}>Last name</span>
                    </label>
                </div>
                <div className={styles.form}>
                    <input
                        type='email'
                        name='text'
                        autoComplete='off'
                        required
                    />
                    <label htmlFor='text' className={styles.labelName}>
                        <span className={styles.contentName}>Email</span>
                    </label>
                </div>
                <div className={styles.form}>
                    <input
                        type='text'
                        name='text'
                        autoComplete='off'
                        required
                    />
                    <label htmlFor='text' className={styles.labelName}>
                        <span className={styles.contentName}>Phone number</span>
                    </label>
                </div>
                
                
            </div>
            <textarea className={styles.textarea} placeholder='Write a message'></textarea>
            <button className={styles.buttonContact}>Submit now</button>
        </div>
    );
};

export default Contact;
