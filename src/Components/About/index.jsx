import React from "react";
import styles from "./about.module.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
    return (
        <>
            <section className={styles.container} id="About">
                <h1>About Me</h1>
                <div className={styles.parrafContainer}>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ipsum hic unde natus quas a est, facere ratione
                        dignissimos voluptates nemo minima quo commodi illo,
                        voluptatibus sint. Distinctio ipsa minima in. Aliquid,
                        voluptates eos? Sed molestias suscipit quam optio quod
                        magnam pariatur consequuntur? Sapiente quidem debitis
                        ipsam placeat cumque, temporibus dolore facilis quae,
                        autem repellat voluptatum, quia voluptatem velit
                        voluptatibus. Atque! Nesciunt repudiandae, vero nihil
                        exercitationem iste nisi itaque numquam possimus
                        voluptatibus quae esse maxime optio mollitia, eum odio
                        reprehenderit veniam? Sed, explicabo sapiente. Sequi
                        exercitationem est quas odio mollitia recusandae! Eaque
                        unde nostrum exercitationem repellendus magni,
                        reiciendis hic perspiciatis temporibus. Est veritatis
                        labore excepturi tenetur modi quisquam aperiam
                        cupiditate distinctio, qui aliquam tempore eius maxime
                        id illo, exercitationem eveniet officiis? Provident
                        laudantium quidem dicta reiciendis aperiam totam earum
                        minus vel? Sunt velit laborum minus cupiditate dolor
                        iste sequi aperiam architecto libero, magni fuga
                        tempora, neque nemo possimus, cum culpa adipisci.
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
                        <h5>matiperroni.96@gmail.com</h5>
                    </div>
                    <div className={styles.card}>
                        <GitHubIcon />
                        <h3>Github</h3>
                        <h5>
                            <a
                                href="https://github.com/Matiasperroni"
                                target="_blank"
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
                                href="https://www.linkedin.com/in/matias-perroni/"
                                target="_blank"
                            >
                                Go to Linkedin
                            </a>
                        </h5>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
