import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Internships from './components/Internships/Internships';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Achievements from './components/Achievements/Achievements';
import Coursework from './components/Coursework/Coursework';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <Education />
            <Experience />
            <Internships />
            <Projects />
            <Skills />
            <Achievements />
            <Coursework />
            <Footer />
        </div>
    );
}

export default App;
