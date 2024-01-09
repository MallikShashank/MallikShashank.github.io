import React from 'react';
import styles from './Skills.module.scss';

function Skills() {
    return (
        <section className={styles.skills}>
            <h2>Skills</h2>
            <ul>
                <li>Programming Languages: Python, C++, JavaScript, etc.</li>
                {/* Add more skills here */}
            </ul>
        </section>
    );
}

export default Skills;
