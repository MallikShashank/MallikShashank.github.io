import React from 'react';
import styles from './Achievements.module.scss';

function Achievements() {
    return (
        <section className={styles.achievements}>
            <h2>Achievements</h2>
            <ul>
                <li>Achievement Description</li>
                {/* Add more achievements here */}
            </ul>
        </section>
    );
}

export default Achievements;
