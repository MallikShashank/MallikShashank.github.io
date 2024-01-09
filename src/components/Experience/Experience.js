import React from 'react';
import styles from './Experience.module.scss';

function Experience() {
    return (
        <section className={styles.experience}>
            <h2>Experience</h2>
            <ul>
                <li>Qualcomm, System Analyst (Associate) (July, 2023 - current)</li>
                {/* Add more experience items here */}
            </ul>
        </section>
    );
}

export default Experience;
