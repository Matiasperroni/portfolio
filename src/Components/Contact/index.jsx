import React from "react";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container} id="Contact">
      <h1>Contact</h1>
      <h2>Feel free to leave a message!</h2>
      <form
        action="https://formsubmit.co/caf7141f70c4a8a5333ed6f0178eac19"
        method="POST"
        className={styles.inputsCont}
      >
        <div className={styles.form}>
          <input type="text" name="name" autoComplete="off" required />
          <label htmlFor="text" className={styles.labelName}>
            <span className={styles.contentName}>Name</span>
          </label>
        </div>
        <div className={styles.form}>
          <input type="text" name="lastName" autoComplete="off" required />
          <label htmlFor="text" className={styles.labelName}>
            <span className={styles.contentName}>Last name</span>
          </label>
        </div>
        <div className={styles.form}>
          <input type="email" name="email" autoComplete="off" required />
          <label htmlFor="text" className={styles.labelName}>
            <span className={styles.contentName}>Email</span>
          </label>
        </div>
        <div className={styles.form}>
          <input type="tel" name="phoneNumber" autoComplete="off" required />
          <label htmlFor="text" className={styles.labelName}>
            <span className={styles.contentName}>Phone number</span>
          </label>
        </div>
        <div className={styles.textAreaCont}>
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Write a message"
          ></textarea>
          <button type="submit" className={styles.buttonContact}>
            Submit now
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
