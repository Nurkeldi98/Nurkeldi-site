import { useCallback } from "react";
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
            background: {
                color: '#0e1524ff'
            },
            fpsLimit: 100,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    resize: true
                }
            },
            particles: {
                color: { value: '#62dff0ff' },
                links: {
                    color: '#ffffff',
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2
                },
                number: {
                    value:90
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    value: { min: 1, max: 3 }
                }
            },
            detectRetina: true
        }}
      />
    );
};

export default ParticlesBackground;