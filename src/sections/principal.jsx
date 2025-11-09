import fotoChica from '@/assets/img/vida-de-club-nocturno-de-alto-angulo-con-humo-colorido-y-dj-femenino-rojo.jpg';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Primario from '@/components/botones/primario';
import Parallax from '@/components/parallax/parallax';
import Navegacion from '@/components/navegacion/navegacion';

const Principal = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="bg-black flex-1">
            <Parallax>
                <section className="bg-black w-full min-h-dvh relative">
                    <h1 className='absolute top-1/12 left-1/2 -translate-x-1/2 text-white/90 text-5xl pollerOne text-shadow-[5px_5px_0px_rgba(0,0,0,1)] text-shadow-black z-2'>
                        Portada
                    </h1>
                    <motion.img
                        className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-1'
                        src={fotoChica}
                        alt="Imagen de fondo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 3, ease: 'easeInOut' }} />
                    <motion.button
                        key={scrolled ? "hidden" : "visible"}
                        className='absolute bottom-1/32 left-1/2 -translate-x-1/2 text-white/70 font-mono font-bold z-2'
                        animate={scrolled ? {
                            opacity: 0
                        } : {
                            y: [0, -3, 0]
                        }}
                        transition={scrolled ? {
                            duration: 0.3
                        } : {
                            duration: 0.9,
                            repeat: Infinity,
                            repeatDelay: 0,
                            ease: 'easeOut'
                        }}>
                        Deslizá <i className='fa-solid fa-arrow-down'></i>
                    </motion.button>
                </section>
                <section className="bg-white text-black min-h-dvh">
                    <Navegacion />
                    <div className='p-2'>
                        <h1 className='text-5xl pollerOne my-5 text-center'>
                            Home
                        </h1>
                        <p className='font-mono'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sunt velit exercitationem explicabo eos facere cupiditate fugit laudantium cum voluptatibus cumque, fugiat nihil impedit ab, accusamus voluptas suscipit sed quam?
                        </p>
                        <article className='my-10 flex justify-end pr-5'>
                            <Primario texto='Ver catálogo' />
                        </article>
                    </div>
                    

                </section>
            </Parallax>
        </main>
    );
};

export default Principal;