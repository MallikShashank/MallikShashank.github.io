import React, { useEffect } from 'react';
import * as THREE from 'three';
import { Water } from 'three/examples/jsm/objects/Water.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import styles from './Header.module.scss';
import imagestyles from './HeaderImage.module.scss';
import textstyles from './HeaderText.module.scss';

function Header() {
    useEffect(() => {
        initWaterEffect();
    }, []);

    const initWaterEffect = () => {
        const container = document.getElementById('waterEffectContainer');

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 20000);
        camera.position.set(30, 70, 100);
        scene.add(camera);

        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        // Add water
        const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
        const water = new Water(
            waterGeometry,
            {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: new THREE.TextureLoader().load("https://cdn.glitch.com/7da04fe9-3f35-4ff9-9dd5-1de3d6fcea32%2Fwaternormals.jpg?v=1605815093396", function (texture) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                }),
                alpha: 0.6,
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x0096FF,
                distortionScale: 4.2,
                fog: scene.fog !== undefined
            }
        );
        water.rotation.x = - Math.PI / 2;
        scene.add(water);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.maxPolarAngle = Math.PI * 0.495;
        controls.target.set(0, 10, 0);
        controls.minDistance = 40.0;
        controls.maxDistance = 200.0;
        controls.update();

        // Animation loop
        function animate() {
            requestAnimationFrame(animate);
            water.material.uniforms['time'].value += 1.0 / 80.0;
            renderer.render(scene, camera);
        }

        animate();
    };

    document.addEventListener('DOMContentLoaded', initWaterEffect);

    return (
        <header className={styles.header}>
            <div id="waterEffectContainer">
                <div className={styles.headerImageContent}>
                    <div className={imagestyles.imageContainer}>
                        <img src="shashank_photo.jpeg" alt="Shashank Mallik" className={imagestyles.profileImage} />
                        <img src="logo.jpg" alt="Logo" className={imagestyles.backImage} />
                    </div>
                </div>
            </div>
            <div className={styles.headerTextContent}>
                <div className={styles.headerTextBackground}>
                    <div className="header-text">
                        <h1>Shashank Mallik</h1>
                        <div className={textstyles.typing}>
                            <div className={textstyles.typingText}>Coder.    </div>
                            <div className={textstyles.typingText}>Developer.</div>
                            <div className={textstyles.typingText}>Designer. </div>
                        </div>
                        <section id="bio">
                            <p>Software Engineer</p>
                        </section>
                        <p>Email: shashank.mallik06@gmail.com | Mobile: +91-7667333301</p>
                        <p>
                            <a href="https://www.linkedin.com/in/shashank-mallik-9652311a4/">LinkedIn</a> |
                            <a href="https://mallikshashank.github.io">Portfolio</a>
                        </p>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;
