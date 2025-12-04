import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect} from "react";
import Menu from "@/components/navegacion/menu";
import ListaMobile from "@/components/navegacion/listaMobile";
import { items } from '@/components/navegacion/items';

const Navegacion = () => {
    const [abierto, setAbierto] = useState(false);
    const navRef = useRef();

    useEffect(() => {
        const closeMenu = (event) => {
            if (!navRef.current?.contains(event.target)) {
                setAbierto(false)
            }
        }

        document.addEventListener('click', closeMenu);

        return () => (document.removeEventListener('click', closeMenu))
    }, [setAbierto])

    return (
        <nav
            ref={navRef}
            className={'bg-black px-2 text-white flex items-center shadow-sm shadow-gray-700 fixed top-0 left-0 right-0 z-100'}>
            <Menu abierto={abierto} setAbierto={setAbierto} />
            <AnimatePresence>
                {abierto ?
                    <motion.article
                        className="absolute top-16 left-0 z-100"
                        initial={{ x: '-100%'}}
                        animate={{ x: 0}}
                        exit={{ x: '-100%'}}
                        transition={{duration:0.3, ease:'easeInOut'}}>
                        <ListaMobile
                            items={items}
                            setAbierto={setAbierto} />
                    </motion.article>
                : null}
            </AnimatePresence>
        </nav>
    );
};

export default Navegacion;