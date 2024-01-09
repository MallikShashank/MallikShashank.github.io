import React from 'react';
import styles from './Projects.module.scss';

function Projects() {
    return (
        <section className={styles.projects}>
            <h2>Projects</h2>
            <ul>
                <li>Project Name: brief description or link to the project</li>
                {/* Add more projects here */}
            </ul>
        </section>
    );
}

export default Projects;
