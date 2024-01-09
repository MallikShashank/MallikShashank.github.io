import React from 'react';
import styles from './Coursework.module.scss';

function Coursework() {
    return (
        <section className={styles.coursework}>
            <h2>Relevant Coursework</h2>
            <ul>
                <li>DSA</li>
                {/* Add more courses here */}
            </ul>
        </section>
    );
}

export default Coursework;
