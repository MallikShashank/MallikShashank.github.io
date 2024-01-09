import React from 'react';
import styles from './Internships.module.scss';

function Internships() {
    return (
        <section className={styles.internships}>
            <h2>Internships</h2>
            <ul>
                <li>Qualcomm, Intern (Jan, 2023 - Jun, 2023)</li>
                <li>Autodesk, SWE Intern (Jun, 2022 - Dec, 2022)</li>
                {/* Add more internship items here */}
            </ul>
        </section>
    );
}

export default Internships;
