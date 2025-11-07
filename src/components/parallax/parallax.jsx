import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform
} from 'framer-motion';
import { Children, ReactNode, useRef } from 'react';

const Parallax = ({ children }) => {
    const target = useRef(null);
    const hero = Children.toArray(children)[0];
    const section = Children.toArray(children)[1];

    const { scrollYProgress } = useScroll({ target });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0, 1], [0, 1]);
    
    return (
        <motion.div ref={target}>
            <motion.div
                style={{
                    y,
                    scale,
                    opacity
                }}>
                {hero}
            </motion.div>
            <motion.div
                style={{
                    y: -1,
                    scale: scale2,
                    opacity: opacity2
                }}>
                {section}
            </motion.div>
        </motion.div>
    )
};

export default Parallax;