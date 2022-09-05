import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BannerParticles = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    particles: {
                        fullScreen: {
                            enable: true,
                            zIndex: -1,
                        },
                        number: {
                            value: 300,
                            density: {
                                enable: true,
                                value_area: 500,
                            },
                        },
                        color: {
                            value: "#fff",
                        },
                        shape: {
                            type: "circle",
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0,
                                sync: false,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 4,
                                size_min: 0.3,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 2,
                            direction: "none",
                            random: true,
                            straight: false,
                            out_mode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 600,
                            },
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onclick: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 250,
                                size: 0,
                                duration: 2,
                                opacity: 0,
                                speed: 3,
                            },
                            repulse: {
                                distance: 80,
                                duration: 1,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                    background: {
                        color: "#00002d",
                    },
                }}
            />
        </div>
    );
};

export default BannerParticles;
