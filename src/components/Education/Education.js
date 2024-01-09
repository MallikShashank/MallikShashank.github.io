import React from 'react';
import styles from './Education.module.scss';

function Education() {
    return (
        <section className={styles.education}>
            <h2>Education</h2>
            <ul>
                <li>Bachelor's Degree in Computer Science - Kalinga Institute of Industrial Technology (KIIT), 2023</li>
                {/* Add more education items here */}
            </ul>
        </section>
    );
}

export default Education;
